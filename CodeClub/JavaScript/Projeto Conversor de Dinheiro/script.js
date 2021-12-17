const value = document.getElementById('calcValue')
const calc = document.getElementById('button')
const Span = document.getElementById('span')
const DolarP = document.getElementById('P')
const selec = document.getElementById('select')

const dolar = 5.68 
const euro = 7.68

selec.addEventListener('change', changeCoin)
  
function calcValue(){
    let res = value.value / dolar
    Span.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL",
    }).format(value.value)


    DolarP.innerHTML =  new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD",
    }).format(res.toFixed(2))
    
}

function changeCoin(){
    const imgC = document.getElementById('a')
    const nome = document.getElementById('name')
    const change = selec.value

    if (change === "Є Euro") {
        imgC.src ="./assets/euro.png"
        nome.innerHTML = "Euro"   
    }

    
    
}

