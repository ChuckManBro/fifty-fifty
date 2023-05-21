'use strict';
// 50 PROJECTS IN 50 DAYS

const boxes = document.querySelectorAll(`.box`);

window.addEventListener('scroll', revealBoxes);

revealBoxes();

function revealBoxes() {
	const windowBottom = window.innerHeight;

	boxes.forEach((box) => {
		const boxBottom = box.getBoundingClientRect().bottom;

		boxBottom < windowBottom ? box.classList.add('show') : box.classList.remove('show');
	});
}
