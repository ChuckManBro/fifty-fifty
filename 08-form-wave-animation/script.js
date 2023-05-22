'use strict';
// 50 PROJECTS IN 50 DAYS

const labels = document.querySelectorAll(`.form-control label`);

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)
		.join('');
});

document.getElementById('login-btn').addEventListener('click', function (event) {
	event.preventDefault();
});
