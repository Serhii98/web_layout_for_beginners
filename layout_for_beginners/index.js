function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}
