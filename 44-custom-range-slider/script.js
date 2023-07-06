'use strict';
// 50 PROJECTS IN 50 DAYS

const range = document.querySelector(`#range`);

range.addEventListener('input', (e) => {
	// The + symbol converts the string to a number
	const value = +e.target.value;
	const label = e.target.nextElementSibling;

	const range_width = getComputedStyle(e.target).getPropertyValue('width');
	const label_width = getComputedStyle(label).getPropertyValue('width');

	// This removes the "px" from the end of the string, and the + symbol turns it into a number
	const num_width = +range_width.substring(0, range_width.length - 2);
	const num_label_width = +label_width.substring(0, label_width.length - 2);

	const min = +e.target.min;
	const max = +e.target.max;

	// I strayed from the tutorial solution for this formula. The 24 and 12 is due to the size of the thumb which does not center upon the ends of the slider track
	const increment = (num_width - 24) / max;
	const left = value * increment - num_label_width / 2 + 12;
	label.style.left = `${left}px`;

	label.innerHTML = value;
});
