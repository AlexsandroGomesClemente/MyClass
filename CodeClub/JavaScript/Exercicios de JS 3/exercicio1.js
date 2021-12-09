//[X] Escreva um programa onde, você chame uma função enviando um número, 
//a função deve imprime na tela os número de 1 até o número que você enviou

let number = 10

function contar() {
    for (i = 1; i <= number; i++){
        console.log(i)
    }
}

contar(number)