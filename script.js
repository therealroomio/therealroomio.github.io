
var FRAMES = 360;
var FPS = 60;
var video = document.getElementById('video');

window.addEventListener('scroll', function (e) {
  var time = (window.scrollY / 2100) * FRAMES / FPS;
  video.currentTime = time;
  console.log(time);
});

window.addEventListener('load', function (e) {
  video.pause();
  video.currentTime = 0;
});