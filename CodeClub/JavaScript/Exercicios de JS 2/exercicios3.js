// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let numberWin = Math.floor(Math.random() *10)
let numberSort = Math.floor(Math.random() *10)
let  award = "CodeClub na Faixa"

if (numberWin == numberSort){
    console.log(`Você acaba de ganhar ${award}`)
}else {
    console.log(`Não foi dessa vez...`)
}

console.log(numberWin);
console.log(numberSort)