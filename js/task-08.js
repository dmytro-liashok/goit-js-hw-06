const btnSubmitEl = document.querySelector(`[type="submit"]`);
const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector(`[type="email"]`);
const inputPasswordEl = document.querySelector(`[type="password"]`);

function formSubmision(event) {
  event.preventDefault();
  if (inputEmailEl.value.trim() === "" || inputPasswordEl.value.trim() === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    infoUser();
    formEl.reset();
  }
}

function infoUser() {
  const user = {
    [inputEmailEl.name]: inputEmailEl.value,
    [inputPasswordEl.name]: inputPasswordEl.value,
  };

  console.log(user);
}

formEl.addEventListener("submit", formSubmision);
