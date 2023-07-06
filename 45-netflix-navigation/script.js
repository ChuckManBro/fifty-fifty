'use strict';
// 50 PROJECTS IN 50 DAYS

const openBtn = document.querySelector(`.open-btn`);
const closeBtn = document.querySelector(`.close-btn`);
const nav = document.querySelectorAll(`.nav`);

openBtn.addEventListener('click', () => nav.forEach(navEl => navEl.classList.add('visible')));

closeBtn.addEventListener('click', () => nav.forEach(navEl => navEl.classList.remove('visible')));
