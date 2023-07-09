'use strict';
// 50 PROJECTS IN 50 DAYS

const screens = document.querySelectorAll(`.screen`);
const chooseInsectBtns = document.querySelectorAll(`.choose-insect-btn`);
const startBtn = document.querySelector(`#start-btn`);
const gameContainer = document.querySelector(`#game-container`);
const timeEl = document.querySelector(`#time`);
const scoreEl = document.querySelector(`#score`);
const messageEl = document.querySelector(`#message`);

let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const img = btn.querySelector('img');
		const src = img.getAttribute('src');
		const alt = img.getAttribute('alt');
		selectedInsect = { src, alt };
		screens[1].classList.add('up');
		setTimeout(createInsect, 1000);
		startGame();
	});
});

function createInsect() {
	const insect = document.createElement('div');
	insect.classList.add('insect');
	const { x, y } = getRandomLocation();
	insect.style.top = `${y}px`;
	insect.style.left = `${x}px`;
	insect.innerHTML = `<img src="${selectedInsect.src}" alt="${
		selectedInsect.alt
	}" style="transform: rotate(${Math.random() * 360}deg)" />`;
	insect.addEventListener('click', catchInsect);
	gameContainer.appendChild(insect);
}

function getRandomLocation() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const x = Math.random() * (width - 200) + 100;
	const y = Math.random() * (height - 200) + 100;
	return { x, y };
}

function catchInsect() {
	score++;
	if (score > 19) {
		messageEl.classList.add('visible');
	}
	scoreEl.innerHTML = `Score: ${score}`;

	this.classList.add('caught');
	setTimeout(() => this.remove(), 2000);
	addInsects();
}

function addInsects() {
	setTimeout(createInsect, 1000);
	setTimeout(createInsect, 1500);
}

function startGame() {
	setInterval(increaseTime, 1000);
}

// Timer function
function increaseTime() {
	// calculates minutes and remaining seconds after minutes subtracted
	let m = Math.floor(seconds / 60);
	let s = seconds % 60;
	// prefixes a 0 if single digit
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	timeEl.innerHTML = `Time: ${m}:${s}`;
	// seconds variable was set to 0 at top of script
	seconds++;
}
