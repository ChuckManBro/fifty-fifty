'use strict';
// 50 PROJECTS IN 50 DAYS

// DOM ELEMENTS
const jokeEl = document.querySelector(`#joke`);
const jokeBtn = document.querySelector(`#jokeBtn`);

// GENERATE THE FIRST JOKE
generateJoke();

// BUTTON EVENT
jokeBtn.addEventListener('click', () => generateJoke());

// FETCH FUNCTION - Dot-Then Method
// function generateJoke() {
// 	const endpoint = 'https://icanhazdadjoke.com/';
// 	const config = {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	};

// 	fetch(endpoint, config)
// 		.then(response => response.json())
// 		.then(data => {
// 			jokeEl.innerHTML = data.joke;
// 		});
// }

// FETCH FUNCTION - Async/Await Method
async function generateJoke() {
	const endpoint = 'https://icanhazdadjoke.com/';
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const response = await fetch(endpoint, config);

	const data = await response.json();

	jokeEl.innerHTML = data.joke;
}
