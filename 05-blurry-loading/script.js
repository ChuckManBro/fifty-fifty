'use strict';
// 50 PROJECTS IN 50 DAYS

const loadText = document.querySelector(`.loading-text`);
const bg = document.querySelector(`.bg`);

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(int);
	}

	loadText.innerText = `${load}%`;
  loadText.style.opacity = 1 - (load / 100)

  bg.style.filter = `blur(${10 - (load / 10)}px)`
}