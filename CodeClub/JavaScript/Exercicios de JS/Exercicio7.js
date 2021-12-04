//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

const names = [`Alex`, `Alex`, `Clemente`];

let res = names[0] == names[1]
let res2 = names[0] == names[2]

console.log(res)
console.log(res2)