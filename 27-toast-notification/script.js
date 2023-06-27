'use strict';
// 50 PROJECTS IN 50 DAYS

const button = document.querySelector(`#button`);
const toasts = document.querySelector(`#toasts`);

const messages = [
	{ text: `This is a message.`, type: `info` },
	{
		text: `Great!`,
		type: `success`,
	},
	{ text: `Sorry. Try again.`, type: `error` },
];

button.addEventListener('click', () => createNotification());

function createNotification() {
	const message = getRandomMessage();

	const notif = document.createElement('div');
	notif.classList.add('toast');

	notif.innerText = message.text;
	notif.classList.add(message.type);

	toasts.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 5000);
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
