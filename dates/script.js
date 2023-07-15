'usestrict';

// FAKE DATA
const mealplan = {
	name: 'Cabin Week',
	startDate: '',
	days: [
		{
			breakfast: { contributor: 'Cooks', food: 'Cereal' },
			lunch: { contributor: 'Mousers', food: 'Hamburgers' },
			dinner: { contributor: 'Becks', food: 'Spagetti' },
		},
		{
			breakfast: { contributor: 'Becks', food: 'Pancakes' },
			lunch: { contributor: 'Cooks', food: 'Grilled Cheese Sandwiches' },
			dinner: { contributor: 'Mousers', food: 'Steak & Rice' },
		},
	],
	contributors: [
		{ name: 'Cooks', color: 'blue' },
		{ name: 'Mousers', color: 'green' },
		{ name: 'Becks', color: 'red' },
	],
};

// console.log(JSON.stringify(mealplan.contributors))

// DOM ELEMENTS
const startDateEl = document.querySelector(`#start-date-picker`);
const durationEl = document.querySelector(`#duration`);
const calEl = document.querySelector(`#cal`);

// STARTER VARIABLES
let startDate;
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
let duration = 4; //TEST -
// One day in milliseconds
const oneDay = 86400000;
const currentDay = new Date();
console.log(`CURRENT DATE: ${currentDay.toDateString()}`); //TEST - remove when done?
// Date format that calendar can receive
const currentDayFormatted = `${currentDay.getFullYear()}-${String(
	currentDay.getMonth() + 1
).padStart(2, '0')}-${String(currentDay.getDate()).padStart(2, '0')}`;

// Input initial settings
startDateEl.value = currentDayFormatted;
durationEl.value = duration;

// Set startDate variable
startDateEl.addEventListener('change', setStartDate);
function setStartDate() {
	const dateBeforeOffset = new Date(startDateEl.value).getTime();
	const timeZoneOffset = new Date(startDateEl.value).getTimezoneOffset() * 60000;
	startDate = new Date(dateBeforeOffset + timeZoneOffset);
	generateCal();
}
setStartDate();

// Set duration variable
durationEl.addEventListener('change', e => {
	duration = e.target.value;
	generateCal();
});

function generateCal() {
	document.documentElement.style.setProperty('--duration', duration);

	calEl.innerHTML = '';

	for (let i = 0; i < duration; i++) {
		const dayDate = new Date(startDate);
		dayDate.setDate(dayDate.getDate() + i);
		const dayName = dayNames[dayDate.getDay()];
		const monthName = monthNames[dayDate.getMonth()].slice(0, 3); //REVIEW - remove slice for full month name

		const calDay = document.createElement('div');
		calDay.classList.add('cal-day');
		calDay.innerHTML = `<header>${dayName}<br>${monthName} ${dayDate.getDate()}</header>`;
		calEl.appendChild(calDay);
	}
}
