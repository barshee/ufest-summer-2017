import React, { Fragment, Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.luckyNumber = []
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }
  componentWillMount() {
    fetch('./luckyNumber.json')
      .then(res => { return res.json() })
      .then(json => {
        this.luckyNumber = json
      })
    if (localStorage.count) {
      this.setState({ count: parseInt(localStorage.count, 10) })
    }
  }
  incrementCount() {
    const newValue = this.state.count + 1
    this.setState({ count: newValue })
    this.onUpdateValue(newValue)
  }
  decrementCount() {
    const newValue = this.state.count - 1
    this.setState({ count: newValue })
    this.onUpdateValue(newValue)
  }
  onUpdateValue(newValue) {
    localStorage.count = newValue
    const status = this.luckyNumber.indexOf(newValue) !== -1
    this.props.onLuckyNumber(status)
  }
  render() {
    return (
      <Fragment>
        <div className='wrapper'>
          <div className='clickableArea' onClick={ this.decrementCount }></div>
          <div className='clickableArea' onClick={ this.incrementCount }></div>
        </div>
        <div className='displayCount'>{ this.state.count }</div>
      </Fragment>
    )
  }
}

export default Counter