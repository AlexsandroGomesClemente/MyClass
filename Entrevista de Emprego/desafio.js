/* Desafio da Empresa 7comm
Desafio: Encontre o Menor Número divisivel de 1 a 20.*/

var i;
var divisores;
var valor = 9;

do{
    divisores = 0;
    valor++;
    for (let i = 1; i <= 10; i++) {
        if (valor % i == 0); {
            divisores++;
      }
        
    }while (divisores != 10) {}

    console.log(valor);
}