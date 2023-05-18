function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector("#boxes");
const btnCreateEl = document.querySelector(`[data-create]`);
const btnDestroyEl = document.querySelector(`[data-destroy]`);
const numberInputEl = document.querySelector(`[type="number"]`);

function createBoxes(amount) {
  let strHTML = ``;
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    strHTML += `<div style = "background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px; "></div>`;
    size += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", strHTML);
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

btnCreateEl.addEventListener("click", () => {
  const amount = numberInputEl.value;
  createBoxes(amount);
});

btnDestroyEl.addEventListener("click", destroyBoxes);
