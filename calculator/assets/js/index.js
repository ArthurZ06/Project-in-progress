// Função para inserir valores no display
function insert(n) {
  const display = document.getElementById("resultado");
  display.innerHTML += n;
}

// Função limpa tudo
function clean() {
  const display = document.getElementById("resultado");
  display.innerHTML = ""; // Limpa o display
}

// Função de apagar
function apaga() {
  const display = document.getElementById("resultado");
  display.innerHTML = display.innerHTML.slice(0, -1); // Remove o último caractere
}

// Função para calcular
function calcular() {
  const display = document.getElementById("resultado");
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (error) {
    display.innerHTML = "Erro"; // Exibe "Erro" se a expressão for inválida
  }
}
