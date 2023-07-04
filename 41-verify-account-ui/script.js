'use strict';
// 50 PROJECTS IN 50 DAYS

const codes = document.querySelectorAll(`.code`);

codes[0].focus();

codes.forEach((code, idx) => {
	// keydown will remove the value but still allow the new input
	code.addEventListener('keydown', (e) => {
		codes[idx].value = '';
	});

	// keyup will advance the focus, or reverse for backspace
	code.addEventListener('keyup', (e) => {
		if (e.key >= 0 && e.key <= 9) {
			codes[idx + 1].focus();
		} else if (e.key === 'Backspace' && idx > 0) {
			codes[idx - 1].focus();
		}
	});
});
