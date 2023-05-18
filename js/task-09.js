const btnChangeEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorTextEl = document.querySelector(".color");

function changeColor() {
  const color = getRandomHexColor();
  colorTextEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeEl.addEventListener("click", changeColor);
