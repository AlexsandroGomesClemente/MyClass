// Desafio proposto em uma entrevisda para dev .
// Faça um programa que calcule o meno número inteiro divisivel de 1 a 20.

/* Aula 5 Variáveis
    Variavel serve para guarda algo , como se fosse uma caixa.
    Variavel é criado com um nome unico para ser usado durante o programa.

    var , let e const = Serve para guarda as variaveis.

    Não pode iniciar com numero e colocar espaço.
    ideal usar Camel case e SnackCase

    Colocar nomes que descrevam o que eu estou faze do

    quantidadeDeMacasDoPoto = Camel case primeira palavra com miniscula
    quantidade_de_macas_do_pote = Snake case

    var = Tem escopo global
    let = Tem escopo local porem pode receber outro valor
    conts = Tem escopo local e não aceita alteração;
*/

/*Aula 6  Tipos de dados- String

    String = É do tipo caracters
    Tem três formas de escrever uma string = "" '' ``

    1- "" = É para enfatisar no meio da string é igual '' tanto faz começar com um e usar até o final
    2- `` = É usado para escrever variavel e tals.Pular linhas também .

*/

/*Aula 7 Tipos de dados - NUMBERS
    const number = 123 3232 = Usado para colocar números.
    É usado para guarda valores de numero.
    NaN = Não é um número.
    Pode usar números fracionados
*/

/*Aula 8 Tipos de dados - Object

    Todo objeto tem propriedades e para cada propriedade tem um valor como cor , marca,tamanho.

    const person = {
        name:`Alex`,   Isso é um objeto e serve para criar coisas.
        idade:28,
        sexo:`masculino`,
        height:1.8,
    }
    undefined = Quando não é encontrado o objetoo
    Para acessar apenas uma caracteristica basta colocar um ponto. person.name...
*/

/*Aula 9 Tipos de dados - BOOLEAN

    Boolean = retorna verdadeiro ou falso , sim ou nao .
    true = 1
    false = 0
    O = serve para atribuir oo valor
    O == Serve para comparar .
    O === Serve para comarar o tipo.
*/

/*Aula 10 Tipos de dados - Array

    Array é igual um vetor , lista , você guarda dados do mesmo tipos ou de outros valores.

    Dentro de um array cabe objetos, do mesmo jeito que dentro de um object cabe um array
    Um array começa daa posição 0
*/

/*Aula 11 Math
    Math é uma biblioteca .
    Math.PI = o número do PI 3.14
    Math.pow(2,2) = Potencia
    Math.sqrt(2,25) = Raiz quadrada
    Math.random() = Mostra um número aleatorio ente 0 e 1
    Math.ceil()= Arredonda para cima o número.
    Math.floor()= Arredonda o número para baixo.
*/

/*Aula 12 Desafio 1 */

/*Aula 13 Operadores Aritiméticos
    Os operadores Aritiméticos são úteis para fazer Operaçoes de matemática.
    + = Adição
    - = Subtração
    * = Multiplicação
    / = Divisão
    % = Resto da divisão
    ++ incrimento de adição
    -- incremento de subtração
    ** incremento de multiplicação
*/

/*Aula 14 Operadores Atribuição

    = Atribui o valor
    += Atribui a soma
    -= Atribui a subtração
    *= Atribui multiplicação
    /= Atribui divisão
    %= Atribiu o resto
*/

/*Aula 15 Operadores Comparação pt.1

    > Maior
    < Menor
    >= Maior Igual
    <= Menor Igual
    == Igual
    === Estritamente Igual
    != Não Igual
    !== Estritamente não igual


*/
/*Aula 16 Operadores Comparação pt.2*/


/*Aula 17 Operadores Logicos
    && = Operador And só retorna true se os dois parametros forem verdadeiros
    || = Operador Or  retorna True se um dos paramentros forem verdadeiro
    !exper = Operador Not  torna o valor true em false , e o valor false em true
*/
/*Aula 18 Operadores tenario

    Operador Tenario ? faz o papel de um If else ex:
    condição ? true : false ;
*/

/*Aula 19 Operadores typeof delete
    typeof = fala o tipo da variavel
    delete apaga a variavel
*/

/*Aula 20 Operadores If else

    If (condição) {
        bloco de codigo
    } else {
        caso não seja atendida a condição acima
    }


*/
/*Aula 21 Operadores Else if
    If (condição) {
        bloco de código
    } else If (condição 2){
        bloco de código
    } else para finalizar
*/
/*Aula 22 Operadores Switch Case

    Switch (condição)
        case 1 = codigo
            break
        case 2 = codigo
            break
        case 3 = codigo
            break
        case 4 = codigo
            break
        default = para o código.
*/


/*Aula 23 Operadores For

for
A instrução for cria um loop que consiste em três expressões opcionais,
 dentro de parênteses e separadas por ponto e vírgula, 
seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

for ([inicialização]; [condição]; [expressão final])
   declaração


   inicialização
Uma expressão (incluindo expressões de atribuição) ou declarações variáveis. 
Geralmente usada para iniciar o contador de variáveis. 
Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave var. 
Essas variáveis não são locais no loop, isto é, elas estão no mesmo escopo que o loop for está. 
Variáveis declaradas com let são locais para a declaração.
O resultado desta expressão é descartado.

condição
Uma expressão para ser avaliada antes de cada iteração do loop.
 Se esta expressão for avaliada para true, declaração será executado. 
 Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. 
 Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop for.

 expressão final
Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.
declaração
Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco ({...}) para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia (;).

*/
/*Aula 24 Operadores While
    while
A declaração while cria um laço que executa uma rotina especifica enquanto a 
condição de teste for avaliada como verdadeira.
A condição é avaliada antes da execução da rotina.

Syntax
while (condição) {
  rotina
}

condição
Uma expressão avaliada antes de cada passagem através do laço. Se essa condição for avaliada como verdadeira,
 a rotina é executada.
 Quando a condição for avaliada como falsa, a execução continua na declaração depois do laço while.
rotina

Uma declaração que é executada enquanto a condição é avaliada como verdadeira.
 Para executar multiplas declarações dentro de um laço, use uma declaração em bloco ({ ... }) 
 para agrupar essas declarações.

*/
/*Aula 25 Operadores For Of

    for...of
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), 
chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

Sintaxe
for (variavel of iteravel) {
  declaração
}


*/
/*Aula 26 Operadores For in

for...in
O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.

Syntax
for (variavel in objeto) {...
}

variavel
Uma propriedade diferente do objeto é atribuida em cada iteração.
objeto

Objeto com as propriedades enumeradas.

*/