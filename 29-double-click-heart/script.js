'use strict';
// 50 PROJECTS IN 50 DAYS

const loveMe = document.querySelector(`.loveMe`);
const times = document.querySelector(`#times`);
const instHeart = document.querySelector(`#inst-heart`);
const likeAffirm = document.querySelector(`#like-affirm`);

let liked = false;

loveMe.addEventListener('dblclick', e => {
	if (!liked) {
		createHeart(e);
		instHeart.classList.add('red');
		likeAffirm.classList.remove('hidden');
	} else {
		instHeart.classList.remove('red');
		likeAffirm.classList.add('hidden');
	}
	liked = !liked;
});

/*
//NOTE - The above event listener uses the built-in 'dblclick'. Below is a manually built version.
let clickTime = 0;
loveMe.addEventListener('click', e => {
	if (new Date().getTime() - clickTime < 800) {
		createHeart(e);
	} else {
		clickTime = new Date().getTime();
	}
});
*/

const createHeart = e => {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');
	heart.classList.add('red');

	const x = e.clientX;
	const y = e.clientY;

	const leftOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;

	const xInside = x - leftOffset;
	const yInside = y - topOffset;

	heart.style.left = `${xInside}px`;
	heart.style.top = `${yInside}px`;

	loveMe.appendChild(heart);

	setTimeout(() => heart.remove(), 1000);
};
