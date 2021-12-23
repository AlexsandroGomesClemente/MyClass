/* Exercicio 1 de raiz quadrada.
const number1 = 9
const number2 = 24
const number3 = 4
const number4 = 68
const number5 = 10

let newNumber = Math.sqrt(number1).toFixed(0)
let newNumber2 = Math.sqrt(number2).toFixed(0)
let newNumber3 = Math.sqrt(number3).toFixed(0)
let newNumber4 = Math.sqrt(number4).toFixed(0)
let newNumber5 = Math.sqrt(number5).toFixed(0)

console.log(newNumber, newNumber2, newNumber3, newNumber4, newNumber5)
*/

/* Desafio 2  */

const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const n4 = document.getElementById('n4')
const n5 = document.getElementById('n5')
const btn = document.getElementById('btn')

btn.addEventListener('click', maiorNumber)

function maiorNumber (n1,n2,n3,n4,n5) {
 const res = [n1.value, n2.value, n3.value, n4.value, n5.value]
    console.log(res)
}