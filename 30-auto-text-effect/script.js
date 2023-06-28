'use strict';
// 50 PROJECTS IN 50 DAYS

const text = 'ChuckManBro';

const textEl = document.querySelector(`#text`);
const speedEl = document.querySelector(`#speed`);
let idx = 1;
// This sets the initial speed. Event Listener below sets it when input changes
let speed = 300 / speedEl.value;

function writeText() {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		// This will reset the effect. To end effect, 'return' here
		idx = 1;
	}

	setTimeout(writeText, speed);
}

writeText();

// A real website probably wouldn't have this control input
speedEl.addEventListener('input', e => (speed = 300 / e.target.value));
