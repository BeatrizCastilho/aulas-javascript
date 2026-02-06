const adultos = parseInt(prompt("Quantos adultos vao na festa?"))
const criancas = parseInt(prompt("Quantas crianças vao na festa?"))
const horasFesta = parseInt(prompt("Quantas horas vai durar a festa?"))

const totalPessoas = (adultos + criancas)

const mesas = (totalPessoas / 4)

const salgadinhos = (totalPessoas * 18)
const docinhos = (totalPessoas * 6)
const refrigerante = (totalPessoas * 1)

const copos = (totalPessoas * 5)
const pratos = (totalPessoas * 2)
const kits = (totalPessoas * 2)

const valorSalgadinhos = (salgadinhos / 100) * 48.90
const valorDocinhos = (docinhos / 20) * 42.90
const valorRefrigerante = (refrigerante / 2) * 8.99

const valorCopos = (copos / 100) * 12.99
const valorPratos = (pratos / 10) * 4.99
const valorKits = (kits / 10) * 7.99
const valorMesas = (mesas * 17.99)

const valorkaraoke = (horasFesta * 13.99)
const aluguelEspaco = (horasFesta * 239.99)

const valorDividido = valorMesas + valorkaraoke +
aluguelEspaco


const totalFesta = valorCopos + valorDocinhos +
aluguelEspaco + valorKits + valorPratos +
valorRefrigerante + valorSalgadinhos + valorDividido



const valorAdultos = (valorDividido / adultos)

alert(
  `O valor total da festa sera ${totalFesta.toFixed(2)}\n
  e o valor dividido entre os adultos sera ${valorAdultos.toFixed(2)}`

  
)



