'use strict';

const spinBox = document.querySelector(`.spin-box`);

let resizeTimer = null;
let scrollHeight;
let clientHeight;
let totalScrollable;

getScrollDimensions();

function getScrollDimensions() {
	scrollHeight = document.body.scrollHeight;
	clientHeight = document.documentElement.clientHeight;
	totalScrollable = scrollHeight - clientHeight;

	console.log(`***** SIZES *****`);
	console.log(`Scroll Height: ${scrollHeight}`);
	console.log(`Viewport Height: ${clientHeight}`);
	console.log(`Total scrollable height: ${totalScrollable}`);
}

window.onresize = () => {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(getScrollDimensions, 1000);
};

window.addEventListener('scroll', () => {
	console.log(Math.floor((window.scrollY / totalScrollable) * 360));
	spinBox.style.transform = `rotate(${Math.floor((window.scrollY / totalScrollable) * 360)}deg)`;
});
