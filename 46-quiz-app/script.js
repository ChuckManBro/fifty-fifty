'use strict';
// 50 PROJECTS IN 50 DAYS

const quiz = document.querySelector(`#quiz`);
const answerEls = document.querySelectorAll(`.answer`);
const questionEl = document.querySelector(`#question`);
const aText = document.querySelector(`#a-text`);
const bText = document.querySelector(`#b-text`);
const cText = document.querySelector(`#c-text`);
const dText = document.querySelector(`#d-text`);
const submitBtn = document.querySelector(`#submit`);

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	answerEls.forEach(answer => (answer.checked = false));

	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	aText.innerText = currentQuizData.a;
	bText.innerText = currentQuizData.b;
	cText.innerText = currentQuizData.c;
	dText.innerText = currentQuizData.d;
}

function getSelected() {
	let answer;
	answerEls.forEach(answerEl => {
		if (answerEl.checked) {
			answer = answerEl.id.slice(3);
		}
	});
	return answer;
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Reload</button>
      `;
		}
	}
});
