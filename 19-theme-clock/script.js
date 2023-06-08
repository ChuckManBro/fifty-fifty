'use strict';
// 50 PROJECTS IN 50 DAYS

const hourEl = document.querySelector(`.hour`);
const minuteEl = document.querySelector(`.minute`);
const secondEl = document.querySelector(`.second`);
const timeEl = document.querySelector(`.time`);
const dateEl = document.querySelector(`.date`);
const toggle = document.querySelector(`.toggle`);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', e => {
	const html = document.querySelector(`html`);

	html.classList.toggle('dark');

	if (html.classList.contains('dark')) {
		e.target.innerHTML = 'Dark mode';
	} else {
		e.target.innerHTML = 'Light mode';
	}
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM'

	hourEl.style.transform = `translate(-50%, -100%) rotate(${convertHoursToDegrees(
		hoursForClock,
		minutes
	)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const convertHoursToDegrees = (hours, minutes) => Math.round((360 * (hours * 60 + minutes)) / 720);

setTime();
setInterval(setTime, 1000);
