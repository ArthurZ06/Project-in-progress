function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador *= numero;
    if (operador === "*") acumulador /= numero;
  }
  console.log(acumulador);
}

conta("-", 34, 20, 10, 5, 31);
