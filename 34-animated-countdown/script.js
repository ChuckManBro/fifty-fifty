'use strict';
// 50 PROJECTS IN 50 DAYS

const nums = document.querySelectorAll(`.nums span`);
const counter = document.querySelector(`.counter`);
const finalMessage = document.querySelector(`.final`);
const replay = document.querySelector(`#replay`);

runAnimation();

function runAnimation() {
	nums.forEach((span, idx) => {
		const nextToLast = nums.length - 1;

		span.addEventListener('animationend', e => {
			if (e.animationName === 'goIn' && idx !== nextToLast) {
				span.classList.remove('in');
				span.classList.add('out');
			} else if (e.animationName === 'goOut' && span.nextElementSibling) {
				span.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				finalMessage.classList.add('show');
			}
		});
	});
}

replay.addEventListener('click', () => {
	resetDOM();
	runAnimation();
});

function resetDOM() {
	counter.classList.remove('hide');
	finalMessage.classList.remove('show');

	nums.forEach(span => {
		span.classList.value = '';
	});

	nums[0].classList.add('in');
}
