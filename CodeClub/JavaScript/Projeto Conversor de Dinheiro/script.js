const Value = document.getElementById('calcValue')
const calc = document.getElementById('button')
const Span = document.getElementById('span')
const DolarP = document.getElementById('P')
const selec = document.getElementById('select')

const dolar = 5.68
const euro = 7.68

selec.addEventListener('change', changeCoin)

function calcValue() {
    let res = Value.value / dolar
    let res2 = Value.value / euro
    Span.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(Value.value)

    switch (selec.value) {
        case 'US$ Dolar Americano':
            DolarP.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(res.toFixed(2))
            break;
        case 'Є Euro':

            DolarP.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
            }).format(res2.toFixed(2))
                
            break;
        default:
            break;
    }

}

function changeCoin() {
    const imgC = document.getElementById('a')
    const nome = document.getElementById('name')

    if (selec.value === 'Є Euro') {
        nome.innerHTML = `Euro`
        imgC.src = "./assets/euro.png"
    }
    if (selec.value === "US$ Dolar Americano") {
        nome.innerHTML = 'Dolar'
        imgC.src = "./assets/eua.png"

    }
    calcValue()
}

