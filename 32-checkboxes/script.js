'use strict';
// 50 PROJECTS IN 50 DAYS

const toggles = document.querySelectorAll(`.toggle`);
const quality = document.querySelector(`#quality`);
const cheap = document.querySelector(`#cheap`);
const fast = document.querySelector(`#fast`);

toggles.forEach(toggle =>
	toggle.addEventListener('change', e => {
		doTheTrick(e.target);
	})
);

function doTheTrick(theClickedOne) {
	if (quality.checked && cheap.checked && fast.checked) {
		if (quality === theClickedOne) {
			cheap.checked = false;
		}
		if (cheap === theClickedOne) {
			quality.checked = false;
		}
		if (fast === theClickedOne) {
			cheap.checked = false;
		}
	}
}
