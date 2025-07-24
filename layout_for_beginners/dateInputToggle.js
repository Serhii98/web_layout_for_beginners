export function initDateInputToggle() {
  const originalDateInput = document.getElementById('date');

  if (!originalDateInput) return;

  const handleChange = function () {
    if (!this.value) return;

    const date = new Date(this.value);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formatted = date.toLocaleDateString('en-GB', options).replace(',', '');

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.className = this.className;
    textInput.value = formatted;
    textInput.readOnly = true;

    this.replaceWith(textInput);

    textInput.addEventListener('click', () => {
      const newDateInput = document.createElement('input');
      newDateInput.type = 'date';
      newDateInput.id = 'date';
      newDateInput.required = true;
      newDateInput.className = textInput.className;

      newDateInput.addEventListener('change', handleChange);
      newDateInput.addEventListener('keydown', e => e.preventDefault());

      textInput.replaceWith(newDateInput);

      newDateInput.focus();
      newDateInput.click();
    });
  };

  originalDateInput.addEventListener('keydown', e => e.preventDefault());
  originalDateInput.addEventListener('change', handleChange);
}
