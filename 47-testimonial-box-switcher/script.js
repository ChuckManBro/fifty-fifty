'use strict';
// 50 PROJECTS IN 50 DAYS

const testimonialsContainer = document.querySelector(`.testimonials-container`);
const progressBar = document.querySelector(`.progress-bar`);
const testimonial = document.querySelector(`.testimonial`);
const userImage = document.querySelector(`.user-image`);
const username = document.querySelector(`.username`);
const role = document.querySelector(`.role`);

let idx = 0;

// Choose interval length
const testimonialInterval = 6;
// Set CSS variable
document.documentElement.style.setProperty(
	'--testimonial-interval',
	`${testimonialInterval * 1000}ms`
);

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx];
	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	role.innerHTML = position;

	if (idx === testimonials.length - 1) {
		idx = 0;
	} else {
		idx++;
	}

	// There is no way to restart a CSS animation. Instead, the JS removes a class, waits 100m with a setTimeout, then adds the 'active' class.
	progressBar.classList.add('active');
}

progressBar.addEventListener('animationend', () => {
	progressBar.classList.remove('active');
	setTimeout(updateTestimonial, 100);
});

// The initial updateTestimonial function sets the first card
updateTestimonial();
