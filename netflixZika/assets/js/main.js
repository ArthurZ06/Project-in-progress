const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!isValidEmail(email)) {
    displayError("Please enter a valid email address.");
    return;
  }
  if (password.length < 4 || password.length > 60) {
    displayError("Your password must contain between 4 and 60 characters.");
    return;
  }

  displayError(""); // Limpa mensagens de erro
  alert("Login successful!");
  form.reset();
});

function displayError(message) {
  if (message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}
