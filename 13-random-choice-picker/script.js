'use strict';
// 50 PROJECTS IN 50 DAYS

const tagsEl = document.querySelector(`#tags`);
const textarea = document.querySelector(`#textarea`);

textarea.focus();

textarea.addEventListener('keyup', e => {
	createTags(e.target.value);
});

function createTags(input) {
	const tags = input.split(`\n`);
	console.log(tags);
}
