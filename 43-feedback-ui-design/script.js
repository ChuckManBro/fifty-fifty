'use strict';
// 50 PROJECTS IN 50 DAYS

const ratings = document.querySelectorAll(`.rating`);
const sendBtn = document.querySelector(`#send`);
const panel = document.querySelector(`#panel`);
let selectedRating = null;

ratings.forEach((rating) => {
	rating.addEventListener('click', (e) => {
		if (!e.target.classList.contains('rating')) {
			setSelection(e.target.parentNode);
		} else {
			setSelection(e.target);
		}
	});
});

function setSelection(target) {
	ratings.forEach((rating) => rating.classList.remove('active'));
	target.classList.add('active');
	selectedRating = target.children[1].innerHTML;
}

sendBtn.addEventListener('click', () => {
	if (selectedRating) {
		panel.innerHTML = `
			<i class="fas fa-heart"></i>
			<strong>Thank You!</strong>
			<br>
			<strong>Feedback: ${selectedRating}</strong>
			<p>We will use your feedback to improve our customer support</p>
		`;
	}
});
