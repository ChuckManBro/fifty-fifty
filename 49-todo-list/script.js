'use strict';
// 50 PROJECTS IN 50 DAYS

const form = document.querySelector(`#form`);
const input = document.querySelector(`#input`);
const todosUL = document.querySelector(`#todos`);

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
	todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', e => {
	e.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;

	if (todo) {
		todoText = todo.text;
	}

	if (todoText) {
		const todoEl = document.createElement('li');
		if (todo && todo.completed) {
			todoEl.classList.add('completed');
		}

		todoEl.innerText = todoText;

		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');
			updateLocalStorage();
		});

		// 'contextmenu' is a substitute for right click. A true right click must first disable the default function then listen for propper button number (2?), (perhaps different syntax for different browsers)
		todoEl.addEventListener('contextmenu', e => {
			e.preventDefault();
			todoEl.remove();
			updateLocalStorage();
		});

		todosUL.appendChild(todoEl);

		input.value = '';

		updateLocalStorage();
	}
}

function updateLocalStorage() {
	const todosEl = document.querySelectorAll('li');
	const todos = [];
	todosEl.forEach(todoEl => {
		todos.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains('completed'),
		});
	});

	localStorage.setItem('todos', JSON.stringify(todos));
}
