'use strict';
// 50 PROJECTS IN 50 DAYS

const header = document.querySelector(`#header`);
const title = document.querySelector(`#title`);
const excerpt = document.querySelector(`#excerpt`);
const profileImg = document.querySelector(`#profile-img`);
const name = document.querySelector(`#name`);
const date = document.querySelector(`#date`);

const animatedBgs = document.querySelectorAll(`.animated-bg`);
const animatedBgTexts = document.querySelectorAll(`.animated-bg-text`);

function getData() {
	header.innerHTML = `<img src="./images/travel.jpg" />`;
	title.innerHTML = `Lorem ipsum dolor`;
	excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, maiores?`;
	profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" />`;
	name.innerHTML = `John Doe`;
	date.innerHTML = `June 14, 2023`;

	animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
	animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);
