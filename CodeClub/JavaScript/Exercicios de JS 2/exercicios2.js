/*[X] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
*/

const pessoa1 = {Nome : `Alex`,Nascionalidade:`Americano`}
const pessoa2 = {Nome:`Caroline`,Nascionalidade:`Brasileira`}

if(pessoa1.Nascionalidade === `Brasileira`){
    console.log(`${pessoa1.Nome} é Brasileiro`);
}else {
    console.log(`${pessoa1.Nome} não é Brasileira`)
}
if(pessoa2.Nascionalidade === `Brasileira`){
    console.log(`${pessoa2.Nome} é Brasileira`);
}else {
    console.log(`${pessoa2.Nome} não é Brasileira`)
}
