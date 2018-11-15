/* Get Our Elements using documentQuerySelector */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');

const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player_slider');
const skipButtons = player.querySelectorAll('[data-skip');

/* Build our functions */

/* Hook up the event listeners */