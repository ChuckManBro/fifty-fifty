'use strict';
// 50 PROJECTS IN 50 DAYS

const open = document.querySelector(`#open`)
const close = document.querySelector(`#close`)
const container = document.querySelector(`.container`)

open.addEventListener('click', () => container.classList.add(`show-nav`))

close.addEventListener('click', () => container.classList.remove(`show-nav`))