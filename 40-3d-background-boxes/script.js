'use strict';
// 50 PROJECTS IN 50 DAYS

const magicBtn = document.querySelector(`.magic`);
const boxes = document.querySelector(`#boxes`);

magicBtn.addEventListener('click', () => toggleBig());

function toggleBig() {
	boxes.classList.toggle('big');
}

/*
// Commented out is my solution. I prefer the tutorial solution below.

let fourCounter = 0;

for (let i = 0; i < 16; i++) {
	const newBox = document.createElement('div');
	newBox.classList.add('box');

	const xPosition = (i % 4) * -125;

	if (i % 4 === 0) fourCounter++;
	const yPosition = (fourCounter - 1) * -125;

	newBox.style.backgroundPosition = `${xPosition}px ${yPosition}px`;
	boxes.appendChild(newBox);
}
*/

function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const newBox = document.createElement('div');
			newBox.classList.add('box');
			newBox.style.backgroundPosition = `${j * -125}px ${i * -125}px`;
			boxes.appendChild(newBox);
		}
	}
}

createBoxes();
