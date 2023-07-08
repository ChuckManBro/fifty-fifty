'use strict';
// 50 PROJECTS IN 50 DAYS

const container = document.querySelector(`.container`);
const imageCount = 21;

for (let i = 0; i < imageCount; i++) {
	const img = document.createElement('img');
	img.src = `./images/scenery-${i}.jpeg`;
	container.appendChild(img);
}
