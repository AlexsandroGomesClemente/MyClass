
function inserirNumero(num) {
    const input = document.querySelector('.display').value
    document.querySelector('.display').value = input + num
}
function calculador() {

    const input = document.querySelector('.display').value
    let  resultado = eval(input)
    document.querySelector('.display').value = resultado

    if (input >= 0 || input <= 0){
        resultado = resultado + resultado 
        document.querySelector('.display').value = resultado
    }
    error0()
}

function Inverte() {
  
    const input = document.querySelector('.display').value
    document.querySelector('.display').value = input * -1

}
function RaizQ() {
    const input = document.querySelector('.display').value
    let resultado = Math.sqrt(input)
    document.querySelector('.display').value = resultado

}
function Limpar() {

    document.querySelector('.display').value = ``

}
function LimparOne() {
    const input = document.querySelector('.display').value
    document.querySelector('.display').value = input.slice(0, -1)
}

function error0() {
    const input = document.querySelector('.display').value
    if (input  === `0` ){
        alert(`Não é possivel realizar a operação por 0`)
    }
}
