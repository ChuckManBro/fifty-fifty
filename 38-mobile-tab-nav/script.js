'use strict';
// 50 PROJECTS IN 50 DAYS

const navItems = document.querySelectorAll(`nav li`);
const contents = document.querySelectorAll(`.content`);

navItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		contents.forEach((content) => content.classList.remove('show'));
		contents[idx].classList.add('show');
		navItems.forEach((item) => item.classList.remove('active'));
		navItems[idx].classList.add('active');
	});
});
