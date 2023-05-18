const validationInputEl = document.querySelector("#validation-input");

function genValidation() {
  if (
    validationInputEl.value.trim().length === +validationInputEl.dataset.length
  ) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.add("invalid");
  }
}

validationInputEl.addEventListener("blur", genValidation);
