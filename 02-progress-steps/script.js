'use strict';
// 50 PROJECTS IN 50 DAYS - PROGRESS STEPS

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll(`.circle`);

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
});

prev.addEventListener('click', () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = circles.length;
	}

	update();
});

function update() {
	circles.forEach((circle, index) => {
		if (currentActive > index) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll(`.active`);

	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + `%`;

	//NOTE - Tutorial Method for disabling prev/next buttons
	// if (currentActive === 1) {
	// 	prev.disabled = true;
	// } else if (currentActive === circles.length) {
	// 	next.disabled = true;
	// } else {
	// 	prev.disabled = false;
	// 	next.disabled = false;
	// }

	//NOTE - Same Thing, Using Ternary Operators
	// currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);
	// currentActive === circles.length ? (next.disabled = true) : (next.disabled = false);

	//NOTE - Same Thing - My Solution
	prev.disabled = currentActive === 1;
	next.disabled = currentActive === circles.length;
}

//NOTE - OPTION: Direct click on progress circles may not be desired!!
circles.forEach((circle, index) => {
	circle.addEventListener('click', () => {
		currentActive = index + 1;
		update();
	});
});
