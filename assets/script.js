const form = document.getElementById("check-fun-form");
const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("submit-btn");
const nameErrorMsg = document.getElementById("name-error-msg");
const resultDiv = document.getElementById("result");

function validateNameInput() {
  const name = nameInput.value;
  if (name.trim().length < 3) {
    nameInput.classList.add("invalid-input");
    nameErrorMsg.textContent = "Name must be at least 3 characters long";
    submitBtn.disabled = true;
  } else if (!/^[a-zA-Z\s]*$/.test(name)) {
    nameInput.classList.add("invalid-input");
    nameErrorMsg.textContent = "Name can only contain letters and spaces";
    submitBtn.disabled = true;
  } else if (/\s{2,}/.test(name)) {
    nameInput.classList.add("invalid-input");
    nameErrorMsg.textContent = "Name can only have one continuous space";
    submitBtn.disabled = true;
  } else {
    nameInput.classList.remove("invalid-input");
    nameErrorMsg.textContent = "All good ready to check Fun now";
    submitBtn.disabled = false;
  }
}
nameInput.addEventListener("input", validateNameInput);
nameInput.addEventListener("blur", validateNameInput);
