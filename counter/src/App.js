import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      className: 'App'
    }
    this.onLuckyNumber = this.onLuckyNumber.bind(this)
  }

  render() {
    return (
      <div className={this.state.className}>
        <Counter onLuckyNumber={this.onLuckyNumber} />
      </div>
    );
  }
  onLuckyNumber(boolean = false) {
    this.setState({
      className: boolean ? 'App--isLucky' : 'App'
    })
  }
}

export default App;
