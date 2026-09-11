function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const colorBody = getRandomHexColor();

  document.body.style.backgroundColor = colorBody;
  colorValue.textContent = colorBody;
});
