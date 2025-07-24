import { scrollToBottom, toggleMobileMenu } from './scroll.js';
import { handleFormSubmit } from './formValidation.js';
import { initDateInputToggle } from './dateInputToggle.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerGetStartedBtn = document.querySelector('.header__button');
  if (headerGetStartedBtn) headerGetStartedBtn.addEventListener('click', scrollToBottom);

  const heroGetStartedBtn = document.querySelector('.hero__get-started');
  if (heroGetStartedBtn) heroGetStartedBtn.addEventListener('click', scrollToBottom);

  const scrollArrowBtn = document.querySelector('.hero__scroll-button');
  if (scrollArrowBtn) scrollArrowBtn.addEventListener('click', scrollToBottom);

  const hamburger = document.getElementById('header__hamburger-icon');
  if (hamburger) hamburger.addEventListener('click', () => toggleMobileMenu(hamburger));

  const subscriptionForm = document.querySelector('.subscription__form');
  if (subscriptionForm) subscriptionForm.addEventListener('submit', handleFormSubmit);

  initDateInputToggle();
});
