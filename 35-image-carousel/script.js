'use strict';
// 50 PROJECTS IN 50 DAYS

const interval = 3;

const imgs = document.querySelector(`#imgs`);
const leftBtn = document.querySelector(`#left`);
const rightBtn = document.querySelector(`#right`);
const img = document.querySelectorAll(`#imgs img`);

let idx = 0;

let delay = setInterval(run, interval * 1000);

function run() {
	idx++;
	changeImage();
}

// This resets the delay interval when a next/previous button is clicked
function resetInterval() {
	clearInterval(delay);
	delay = setInterval(run, interval * 1000);
}

function changeImage() {
	if (idx > img.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = img.length - 1;
	}

	imgs.style.transform = `translateX(${idx * -500}px)`;
}

leftBtn.addEventListener('click', () => {
	idx--;
	changeImage();
	resetInterval();
});

rightBtn.addEventListener('click', () => {
	idx++;
	changeImage();
	resetInterval();
});
