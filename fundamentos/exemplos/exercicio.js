const salgado = prompt("qual salgado voce vai comer?")
const preco1 = parseFloat(prompt("quanto custa esse salgado?"))
const refrigerante = prompt("qual refrigerante voce quer??")
const preco2 = parseFloat(prompt("quanto custa esse refri?"))
const taxa = parseFloat(prompt("qual a taxa de entrega?"))

const media = (preco1 + preco2 + taxa) / 3

alert(`A media de quanto cada uma sera  ${media}`)
