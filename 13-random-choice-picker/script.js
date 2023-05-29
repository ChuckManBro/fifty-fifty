'use strict';
// 50 PROJECTS IN 50 DAYS

const tagsDiv = document.querySelector(`#tags`);
const textarea = document.querySelector(`#textarea`);
const selectionBtn = document.querySelector(`#selection-btn`);

textarea.focus();

textarea.addEventListener('keyup', e => {
	createTags(e.target.value);
});

function createTags(input) {
	const tags = input.split(`\n`);

	tagsDiv.innerHTML = '';

	tags.forEach(tag => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsDiv.appendChild(tagEl);
	});
}

selectionBtn.addEventListener('click', () => {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		highlightTag(randomTag);

		setTimeout(() => {
			unHighlightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();

			highlightTag(randomTag);
		}, 100);
	}, times * 100);
});

function pickRandomTag() {
	const tags = document.querySelectorAll(`.tag`);
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight');
}
