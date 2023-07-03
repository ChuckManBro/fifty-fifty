'use strict';
// 50 PROJECTS IN 50 DAYS

const password = document.querySelector(`#password`);
const background = document.querySelector(`#background`);

password.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
});
