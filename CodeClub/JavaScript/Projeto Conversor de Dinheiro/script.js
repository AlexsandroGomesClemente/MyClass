const value = document.getElementById('calcValue')
const dolar = 5.68 
const calc = document.getElementById('button')
const Span = document.getElementById('span')
const DolarP = document.getElementById('P')
  
function calcValue(){
    let res = value.value / dolar
    Span.innerHTML = value.value
    DolarP.innerHTML = res.toFixed(2)
}
