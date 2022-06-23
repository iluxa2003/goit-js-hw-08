import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const _ = require('lodash');
// var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
player.on('timeupdate' , _.throttle(() => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
        console.log(localStorage.getItem("videoplayer-current-time"))
    }).catch(function(error) {});
  }, 1000));
