//Crie 5 objetos nesse formato
//{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

let pessoa1 = { nome: "Alex", idade:14, sexo:"masculino", profissão: "estudante", nacionalidade:"brasileira" }
let pessoa2 = { nome: "Carol", idade:23, sexo:"feminina", profissão: "estudante", nacionalidade:"brasileira" }
let pessoa3 = { nome: "Jose", idade:63, sexo:"masculino", profissão: "aposentado", nacionalidade:"brasileira" }
let pessoa4 = { nome: "Iracema", idade:60, sexo:"feminino", profissão: "cozinheira", nacionalidade:"brasileira" }
let pessoa5 = { nome: "Alan", idade:15, sexo:"masculino", profissão: "pintor", nacionalidade:"americano" }

if (pessoa1.idade >= 18 && pessoa1.nacionalidade === `brasileira`) {
    console.log(`${pessoa1.nome} foi aprovado`)
}else {
    console.log(`${pessoa1.nome} foi reprovado`)
}

if (pessoa2.idade >= 18 && pessoa2.nacionalidade === `brasileira`) {
    console.log(`${pessoa2.nome} foi aprovado`)
}else {
    console.log(`${pessoa2.nome} foi reprovado`)
}

if (pessoa3.idade >= 18 && pessoa3.nacionalidade === `brasileira`) {
    console.log(`${pessoa3.nome} foi aprovado`)
}else {
    console.log(`${pessoa3.nome} foi reprovado`)
}

if (pessoa4.idade >= 18 && pessoa4.nacionalidade === `brasileira`) {
    console.log(`${pessoa4.nome} foi aprovado`)
}else {
    console.log(`${pessoa4.nome} foi reprovado`)
}

if (pessoa5.idade >= 18 && pessoa5.nacionalidade === `brasileira`) {
    console.log(`${pessoa5.nome} foi aprovado`)
}else {
    console.log(`${pessoa5.nome} foi reprovado`)
}