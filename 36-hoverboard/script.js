'use strict';
// 50 PROJECTS IN 50 DAYS

const container = document.querySelector(`#container`);
const nbrOfSquares = 400;
const picker = document.querySelector(`#color-picker`);
const colors = ['#3498db', '#e74c3c', '#8e44ad', '#e67e22', '#2ecc71'];
let colorChoice;

for (let i = 0; i < nbrOfSquares; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseout', () => removeColor(square));
	container.appendChild(square);
}

colors.forEach((color) => {
	const option = document.createElement('div');
	option.classList.add('option');
	if (color === colors[0]) {
		option.classList.add('active');
		colorChoice = color;
	}
	option.style.backgroundColor = color;
	option.addEventListener('click', (e) => pickColor(e));
	picker.appendChild(option);
});

function pickColor(e) {
	colorChoice = e.target.style.backgroundColor;
	const options = document.querySelectorAll(`.option`);
	options.forEach((option) => option.classList.remove('active'));
	e.target.classList.add('active');
}

//NOTE - Tutorial set a random color. I changed it to a Color Picker

function setColor(el) {
	// const color = getRandomColor();
	const color = colorChoice;
	el.style.background = color;
	el.style.boxShadow = `0 0 10px ${color}`;
}

// function getRandomColor() {
// 	return colors[Math.floor(Math.random() * colors.length)];
// }

function removeColor(el) {
	el.style.background = `var(--color-blank)`;
	el.style.boxShadow = `none`;
}
