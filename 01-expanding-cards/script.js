'use strict';

// 50 PROJECTS IN 50 DAYS

const panels = document.querySelectorAll(`.panel`);

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}
