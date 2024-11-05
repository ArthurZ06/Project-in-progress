export function calculadora() {
  function soma(x, y) {
    return x + y;
  }
  function menos(x, y) {
    return x - y;
  }
  function dividir(x, y) {
    return x / y;
  }
  function vezes(x, y) {
    return x * y;
  }
  function apagar(...args) {
    return 0;
  }

  return {
    soma,
    menos,
    dividir,
    vezes,
    apagar,
  };
}
