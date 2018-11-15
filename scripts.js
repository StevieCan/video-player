/* Get Our Elements using documentQuerySelector */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');

const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player_slider');
const skipButtons = player.querySelectorAll('[data-skip');

/* Build our functions */

function togglePlay() {
  /* Conditional Ternary Operator Method */

  // const method = video.pause ? 'play' : 'pause';
  // video[method]();
  
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  console.log(icon);
}
/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);



