const passwordInput = document.querySelector(".password-input");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

submitButton.disabled = true;

submitButton.addEventListener("click", clickHandler);

passwordInput.addEventListener("change", changeHandler);

function clickHandler() {
  var userInput = passwordInput.value;
  if (userInput.length < 10) {
    output.innerText = "Error! Your password should be more than 10 characters";
  } else {
    output.innerText = "Your password is correct";
  }
  console.log(userInput.length);
}

function changeHandler() {
  var userInput = passwordInput.value;
  if (userInput.length < 10) {
    submitButton.disabled = true;
    passwordInput.style.color = "red";
  } else {
    submitButton.disabled = false;
    passwordInput.style.color = "green";
  }
  console.log(userInput.length);
}
