let decrementEl = document.querySelector(`[data-action="decrement"]`);
let incrementEl = document.querySelector(`[data-action="increment"]`);
let valueEl = document.querySelector(`#value`);

let counterValue = 0;

function decrementids() {
  counterValue--;
  valueEl.textContent = counterValue;
}

function incrementids() {
  counterValue++;
  valueEl.textContent = counterValue;
}

decrementEl.addEventListener("click", decrementids);
incrementEl.addEventListener("click", incrementids);
