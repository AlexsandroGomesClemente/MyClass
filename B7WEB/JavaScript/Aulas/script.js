/*let timer;

function comecar () {
    timer = setInterval(showTime, 1000);
}

function parar(){
    clearInterval(timer)
}

function showTime () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    documento.querySelector('.demo').innerHTML = txt;
}*/

/*Aula de Intervalo de JS */
// SetTimeOut = roda uma unica vez 
// clearTimeOut = para o SetTimeOut antes de rodar 
// SetInterval = Atualiza de tempos em tempos
/*function rodar (){
setTimeout(function(){
  document.querySelector('.demo').innerHTML = 'Rodou!';
},2000);
}

function limpar (){
    setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Parou!';
      },2000);
}*/

// Aula de JavaScript Template String

//let frase = 'Meu nome é  '+nome+' e eu tenho '+idade+' anos';
// Isso é uma template String let frase = `Meu nome é ${nome} e eu tenho ${idade} anos`

//Aula Descontrução de Obejetos

/*let pessoa = {
    nome: 'Alex',
    sobrenome:'Clemente',
    idade : 90,
    social: {
        facebook:'Allex',
        instagram:{
            url : 'Seguidores' 
        },
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    },
};

//Significa acessar as informações do objeto e trasnformar em variavel

// let {nome:pessoaNome, sobrenome, idade = Usado para quando o obejto nao tem a variavel. } = pessoa; // faz com que descontrua o objeito e transforme ele em uma variavel
console.log(pessoaNome)*/

// let {facebook, intagram,} = pessoa.social desse jeito pega os dados de um objeto dentro de outro objeto.
// let {nome, idade, social:{intagram:{url:instagram}}}

//  function pegarNomeCompleto (obj){
//    return Object.nome+''+Object.sobrenome
//}

/*Descontroindo um ARRAYS*/

/*let info = ['Alexsandro Clemente', 'Alex', 'Clemente', '@Alex']

let [nomeCompleto, nome, sobrenome, istagram] = info; 

console.log(nomeCompleto, nome, sobrenome,istagram)*/

//Um array nao tem indentificação alem do número
//let [a, , ,instagram] jeito de pegar um array sem ocupar com variaveis.
// function criar (){
    // return [1,2,3]
//}

//let numeros = criar 
//let [a,b,c]= criar() o mesmo funciona para Obejetos.


/* Aula de Arrow Functions */

/*function somar (x, y){
    return x + y 
}

console.log (somar (10, 15)) Primeiro método de fazer uma function*/


/*let somar =  function (p,y) {
    return x+ y 
} segunda forma de fazer uma função*/ 

/*let somar = (x,y) => {
    return x + y ;  Usa esse modo se for feita uma ação a mais.
} */

//let somar = (x,y) => x + y function arrow functions; 
//let letrasNoNome = nome => nome.length; quando existe apenas um paramentro.

/* Aula de Operador Spread */

// Funciona tanto para Arrays quanto para Obejetos.

//let numeros = [1,2,3,4];
//let outros = [...numeros, 5,6,7,8];  ...array <= isso é um spread operator

/*let info = {
    nome:'Alexsandro',
    sobrenome:'Gomes',
    idade:90
};
                             
let novaInfos = {
    ...info, <= Operador Spread usado em um Objeto.
    cidade:'Campinas',
    estado:'São Paulo',
    pais:'Brasil'
};*/

/*function adicionarInfo(infor) {
    let novasInfo = {
        ...info,
        statuss:0,

    }
}                                   Usado na pratica


adicionarInfo({nome:'Alex',sobrenome:'Clemente'});*/



/* Aula de Operador Rest

function(...numeros){ <= Operador Rest ... recebe em formato de array
    console.log(numeros)
}

adicionar (Quantidade de parametros que o usuario iria enviar)
ele serve tanto para números quanto para nomes e outros tipo de variaveis.

*/

/* Aula de Includes e Repeat

    'Includes'
    São duas novidades o ECS+6 
    functions Includes = Serve para array quanto para string
    let nome = 'alex' 
    console.log(nome.includes('Alex'))

    'Repeat'
    
    console.log('x'.repeat(20));
    Serve para repetir o paramentro quantas vezez quiser
 */
 
/* Aula de Objeto:Key,Values e Entries
    ' Com o esses obejtos tem como ter um acesso antecipado a objeto e o array.
    keys = retorna todas as chaves que tem no objeto
    values = retorna todos os valores que tem no objeto
    entries= Em cada item ele gera um array com seu index e o item.
*/

/* String padStart & padEnd 


console.log( telefone.padEnd(9, '*') ) <= padEnd usado para completar a strign com a quantidade que caracteres necessarios. Preenche para a direita.
console.log(telefone.padStart(9, '*')) <= padStard usado para completar para esquerda. fazendo a mesma função que o padEnd.
*/

function somar(n1, n2, ) {
        res = n1 + n2 ;
        alert(res);
};

