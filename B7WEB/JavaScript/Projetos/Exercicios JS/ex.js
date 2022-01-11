const p = document.querySelector("#p")



/* Relogio const Click = () => {
    let date = new Date
    let meses = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Setm', 'Out', 'Nov', 'Dez')
    let Dias = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui','Sex','Sab')

    let Dia = date.getDate()
    let Mes = date.getMonth()
    let Ano = date.getFullYear()
    let DiaS = date.getDay()
    let Hora = date.getHours()
    let Min = date.getMinutes()
    let Sec = date.getSeconds()

    p.innerHTML = `
    Dia: ${Dia} <br>
    Mes: ${meses[Mes]} <br>
    Ano: ${Ano} <br>
    Dia da Semana: ${Dias[DiaS]} <br>
    Hora : ${Hora} <br>
    Min: ${Min} <br>
    Sec: ${Sec} <br> `
}*/

/* Saber a idade const Click = () => {
    let year = parseInt(prompt(`Digite o ano que você nasceu :`))
    let date = new Date
    let Ano = date.getFullYear()

    let i = Ano - year

    p.innerHTML = `Quem nasceu em ${year} tera ${i} anos em ${Ano}`



}*/
// let n = Math.floor(Math.random()*100)


/*const Click = () => {
    let r = parseInt(prompt(`Qual o seu palpite ?`))

    if (r == n) {
        p.innerHTML = `Parabéns você acertou o número é <mark>${n}</mark>`
    } else if (r > n) {
        p.innerHTML += `Não é o número ${r} Meu número é <mark>MENOR</mark> <br>`
    } else if (r < n){
        p.innerHTML += `Não é o número ${r} Meu número é <mark>MAIOR</mark> <br>`
    }

}

const Delete = () => {
    let n = Math.floor(Math.random()*100)
    let clear = document.querySelector("#clear")
    p.innerHTML = `Já pensei em um número entre 1 a 100`

    let r = parseInt(prompt(`Qual o seu palpite ?`))

    if (r == n) {
        p.innerHTML = `Parabéns você acertou o número é <mark>${n}</mark>`
    } else if (r > n) {
        p.innerHTML += `Não é o número ${r} Meu número é <mark>MENOR</mark> <br>`
    } else if (r < n){
        p.innerHTML += `Não é o número ${r} Meu número é <mark>MAIOR</mark> <br>`
    }


}*/

const Cli = () => {
    let n1 = parseInt(prompt(`Digite o primeiro valor :`))
    let n2 = parseInt(prompt(`Digite o segundo  valor :`))

    let escolha = prompt(`
        Os valores são ${n1} e ${n2} escolha o que deseja fazer <br>
        [1] Somar
        [2] Subtrair
        [3] Multiplicar
        [4] Dividir
    `)



    switch (escolha) {
        case escolha == 1:
            let res = n1 + n2
            p.innerHTML += `O resultado de ${n1} + ${n2} é : ${res} `
            break;
        case 2:
             res = n1 - n2
            p.innerHTML += `O resultado de ${n1} - ${n2} é :  ${res}  `
            break;
        case 3:
             res = n1 * n2
            p.innerHTML += `O resultado de ${n1} * ${n2} é :  ${res}  `
            break;

        case 4:
             res = n1 / n2
            p.innerHTML += `O resultado de ${n1} / ${n2} é :  ${res}  `
            break;

        default:
            break;
    }

}
