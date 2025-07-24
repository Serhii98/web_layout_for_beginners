export function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
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
