//[ ] Escreva um programa onde,
// você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e 
// escrever a tabuada de 1 a 10 do valor lido.

let n = 9

const tabuada = (n) => {
    switch (1) {
        case 1:
            let n1 = n*1
            console.log(n1)
            let n2 = n*2
            console.log(n2)
            let n3 = n*3
            console.log(n3)
            let n4 = n*4
            console.log(n4)
            let n5 = n*5
            console.log(n5)
            let n6 = n*6
            console.log(n6)
           let  n7 = n*7
            console.log(n7)
            let n8 = n*8
            console.log(n8)
            let n9 = n*9
            console.log(n9)
            let n10 = n*10
            console.log(n10)
            break;
        default:` Valor não encontrado`
            break;
    }
}

tabuada(n)