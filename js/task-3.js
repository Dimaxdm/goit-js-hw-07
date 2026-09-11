const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const username = event.currentTarget.value.trim();

  nameOutput.textContent = username || 'Anonymous';
});
