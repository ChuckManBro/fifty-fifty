'use strict';
// 50 PROJECTS IN 50 DAYS

const faqs = document.querySelectorAll(`.faq`)

faqs.forEach((faq) => {
  faq.addEventListener('click', (e) => {
    faq.classList.toggle('active')
  })
})