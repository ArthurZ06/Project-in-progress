const form = document.querySelector("form");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const errorMessage = document.querySelector("#error-message");

// Evento de submit do formulário
form.addEventListener("submit", handleFormSubmit);

// Função principal de submit
function handleFormSubmit(event) {
  event.preventDefault(); // Evita envio padrão do formulário

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!validateInputs(email, password)) return;

  displayError(""); // Limpa mensagens de erro
  performLogin(email, password);
}

// Função para validar os campos
function validateInputs(email, password) {
  if (!isValidEmail(email)) {
    displayError("Please enter a valid email address.");
    return false;
  }

  if (!isValidPassword(password)) {
    displayError("Your password must contain between 4 and 60 characters.");
    return false;
  }

  return true; // Retorna verdadeiro se estiver tudo ok
}

// Função para verificar se o email é válido
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para verificar se a senha é válida
function isValidPassword(password) {
  return password.length >= 4 && password.length <= 60;
}

// Função para exibir ou esconder mensagens de erro
function displayError(message) {
  if (message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

// Função simulando o processo de login
function performLogin(email, password) {
  alert(`Login successful for ${email}!`);
  form.reset();
}
