'use strict';
// 50 PROJECTS IN 50 DAYS

const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lengthEl = document.querySelector(`#length`);
const uppercaseEl = document.querySelector(`#uppercase`);
const lowercaseEl = document.querySelector(`#lowercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const generateEl = document.querySelector(`#generate`);

// Validate that at least one option is checked
uppercaseEl.addEventListener('input', atLeastOne);
lowercaseEl.addEventListener('input', atLeastOne);
numbersEl.addEventListener('input', atLeastOne);
symbolsEl.addEventListener('input', atLeastOne);

// If only one checked option remains, it becomes disabled
function atLeastOne() {
	const total = uppercaseEl.checked + lowercaseEl.checked + numbersEl.checked + symbolsEl.checked;
	if (total < 2) {
		if (uppercaseEl.checked) {
			uppercaseEl.disabled = true;
		}
		if (lowercaseEl.checked) {
			lowercaseEl.disabled = true;
		}
		if (numbersEl.checked) {
			numbersEl.disabled = true;
		}
		if (symbolsEl.checked) {
			symbolsEl.disabled = true;
		}
	} else {
		uppercaseEl.disabled = false;
		lowercaseEl.disabled = false;
		numbersEl.disabled = false;
		symbolsEl.disabled = false;
	}
}

generateEl.addEventListener('click', generatePassword);

function generatePassword() {
	let password = '';
	for (let i = 0; i < lengthEl.value; i++) {
		let options = '';
		if (uppercaseEl.checked) options += getRandomUpper();
		if (lowercaseEl.checked) options += getRandomLower();
		if (numbersEl.checked) options += getRandomNumber();
		if (symbolsEl.checked) options += getRandomSymbol();

		const randomValue = options[Math.floor(Math.random() * options.length)];

		password += randomValue;
	}

	resultEl.innerText = password;
}

/*
For ASCII reference, see link below
https://www.w3schools.com/charsets/ref_html_ascii.asp
Lowercase letters start at 97, Uppercase start at 65
*/

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
	return Math.floor(Math.random() * 10);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

clipboardEl.addEventListener('click', () => {
	if (!resultEl.innerText) return;
	navigator.clipboard.writeText(resultEl.innerText).then(
		() => {
			/* clipboard successfully set */
			copiedDisplayMsg();
		},
		() => {
			/* clipboard write failed */
			console.log('Error: copy to clipboard failure');
		}
	);
});

function copiedDisplayMsg() {
	const memory = resultEl.innerText;
	resultEl.innerText = '(copied)';
	setTimeout(() => (resultEl.innerText = memory), 1000);
}

/*
// This code comes from the tutorial, but the execCommand method is now depricated. The above code is current but will not work for an unsecure HTML page, such as local LiveServer

clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) return;

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});
*/
