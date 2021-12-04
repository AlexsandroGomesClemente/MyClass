//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. 
//Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.


let pessoa1 = {Nome:`Alex`,Sobrenome:`Clemente`,Idade:22,Altura:1.74,TipoSanguinio:`A+`}
let pessoa2 = {Nome:`Caroline`,Sobrenome:`Ravena`,Idade:23,Altura:1.5,TipoSanguinio:`A+`}
let pessoa3 = {Nome:`Alex`,Sobrenome:`Clemente`,Idade:22,Altura:1.74,TipoSanguinio:`A+`}

let res = pessoa1.Nome == pessoa3.Nome;
let res2 = pessoa1.Nome == pessoa2.Nome; 

console.log(res);
console.log(res2);

let resN = pessoa1.Nome !== pessoa3.Nome;
let resN2 = pessoa1.Nome !== pessoa2.Nome; 

console.log(resN);
console.log(resN2);
