var IMAGES = [
  '001.png', '002.png', '003.png', '004.png', '005.png', '006.png', '007.png', '008.png', '009.png', '010.png',
  '011.png', '012.png', '013.png', '014.png', '015.png', '016.png', '017.png', '018.png', '019.png', '020.png',
  '021.png', '022.png', '023.png', '024.png', '025.png', '026.png', '027.png', '028.png', '029.png', '030.png',
];
// ラッキーが出る確率
var LUCKY_PROBABILITY = 0.03

var images = IMAGES.slice(0);
var addLucky = function() {
  images.push('lucky.png');
}

var preloadImages = function() {
  return Promise.all(
    IMAGES.map(function(filename) {
      var img = new Image();
      img.src = "./images/" + filename;
      return img;
    })
  );
}

var randomImages = function() {
  var main = document.getElementById('js-main');
  if (images.length === 0) images = IMAGES.slice(0);
  var index = Math.floor(Math.random() * images.length);
  if (Math.random() <= 0.03) {
    main.style.backgroundImage = 'url("./images/lucky.png")';
  } else {
    main.style.backgroundImage = 'url("./images/' + images[index] + '")';
  }
  images.splice(index, 1);
};

// initialize function
preloadImages().then(function() {
  // document.body.requestFullscreen();
  setInterval(function() { randomImages(); }, 130);
});

var toggleFullScreen = function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

document.body.addEventListener('click', toggleFullScreen);
