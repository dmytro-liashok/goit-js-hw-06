const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(textEl);

function changesSlider() {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
}

fontSizeControlEl.addEventListener("input", changesSlider);
