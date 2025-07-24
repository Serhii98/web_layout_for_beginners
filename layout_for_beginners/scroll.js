export function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

export function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
