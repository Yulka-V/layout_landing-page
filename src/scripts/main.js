'use strict';

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    contactForm.reset();
  });
}
