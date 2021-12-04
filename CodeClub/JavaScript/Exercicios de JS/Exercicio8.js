//Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.

const names = [`Alex`, `Alex`, `Clemente`];

let res = names[0] !== names[1]
let res2 = names[0] !== names[2]

console.log(res)
console.log(res2)

