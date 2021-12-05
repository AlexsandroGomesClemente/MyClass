//Faça um programa onde os jurados vão dar a explicação para cada nota dada.
// São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

let nota = 15

switch (nota) {
    case 0:
        console.log(`Não desista , estude e pratique`)
        break;

    case 1:
        console.log(`Pratique mais`)
        break;

    case 2:
        console.log(`Estude mais`)
        break;

    case 3:
        console.log(`Muito Ruim , procure estudar mais`)
        break;

    case 4:
        console.log(`Muito Pessimo `)
        break;

    case 5:
        console.log(`Pessimo , nada a declarar `)
        break;

    case 6:
        console.log(`Ruim, falta estudo`)
        break;

    case 7:
        console.log(`Legal , estude mais `)
        break;

    case 8:
        console.log(`Bom, Falta apenas conhecimento`)
        break;

    case 9:
        console.log(`Muito bom , procure se dedicar só mais um pouco`)
        break;

    case 10:
        console.log(`Execelente , fora da curva`)
        break;



    default: 
        console.log(`Nota não existente`)
        break;
}