//Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - 
//Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => 
//TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => 
//Há números pares e ímpares.


let n1 = 12
let n2 = 8
let n3 = 6
let n4 = 2

if (n1%2 == 0 && n2%2 == 0 && n3%2 == 0 && n4%2 == 0){
    console.log(`Todos os número são pares`)
}else if(n1%2 !== 0 && n2%2 !== 0 && n3%2 !== 0 && n4%2 !== 0){
    console.log(`Todos os números são impares`)
}else {
    console.log(`Há números pares e impares.`)
}