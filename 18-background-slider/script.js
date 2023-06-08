'use strict';
// 50 PROJECTS IN 50 DAYS

const body = document.body
const slides = document.querySelectorAll(`.slide`)
const leftBtn = document.querySelector(`#left`)
const rightBtn = document.querySelector(`#right`)

let activeSlide = 0

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = 4
  }

  setBgToBody()
  setActiveSlide()
})

rightBtn.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}