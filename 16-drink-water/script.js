'use strict';
// 50 PROJECTS IN 50 DAYS

const remained = document.querySelector(`#remained`);
const liters = document.querySelector(`#liters`);
const percentage = document.querySelector(`#percentage`);
const smallCups = document.querySelectorAll(`.cup-small`);

updateBigCup();

smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => {
		highlightCups(index);
	});
});

function highlightCups(index) {
	// If glass is already the final full glass, toggle it off
	if (
		smallCups[index].classList.contains('full') &&
		!smallCups[index].nextElementSibling.classList.contains('full')
	) {
		index--;
	}

	smallCups.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});

	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll(`.cup-small.full`).length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}
