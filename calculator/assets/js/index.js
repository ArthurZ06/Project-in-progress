const nome = 'Arthur'
const sobrenome = 'Nicolas'
const idade = 18
const peso = 85
const altura = 1.80

const resultado = peso / (altura * altura)

let imc = resultado.toFixed(0)
let alturaconsertada = altura.toFixed(2)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaconsertada} de altura e seu IMC é de ${imc} `)
