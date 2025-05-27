function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = document.querySelector('.subscription__form');
  let isValid = true;

  const requiredInputs = form.querySelectorAll('input[required]');

  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('invalid');
      isValid = false;
    } else {
      input.classList.remove('invalid');
    }
  });

  if (isValid) {
    form.submit();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const dateInput = document.getElementById('date');

  // Заборонити ручне введення
  dateInput.addEventListener('keydown', function (e) {
    e.preventDefault();
  });

  // Обробити вибір дати
  dateInput.addEventListener('change', function () {
    if (!dateInput.value) return;

    const date = new Date(dateInput.value);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formatted = date.toLocaleDateString('en-GB', options).replace(',', '');

    // Створюємо фейкове текстове поле поверх реального
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.className = dateInput.className;
    textInput.value = formatted;
    textInput.readOnly = true;

    // Замінюємо date-поле на текстове
    dateInput.replaceWith(textInput);

    // Клік по текстовому полю — знову відкриває date-picker
    textInput.addEventListener('click', function () {
      // Створюємо новий date input
      const newDateInput = document.createElement('input');
      newDateInput.type = 'date';
      newDateInput.id = 'date';
      newDateInput.required = true;
      newDateInput.className = textInput.className;

      // Додаємо той самий обробник change
      newDateInput.addEventListener('change', arguments.callee);

      // Забороняємо ручне введення
      newDateInput.addEventListener('keydown', function (e) {
        e.preventDefault();
      });

      textInput.replaceWith(newDateInput);

      // Автоматично відкриває пікер
      newDateInput.focus();
      newDateInput.click();
    });
  });
});


