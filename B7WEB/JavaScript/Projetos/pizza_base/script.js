let carrinho = []
let modalQt = 1
let modalKey = 0

const c = (e) => document.querySelector(e)
const cs = (e) => document.querySelectorAll(e)

pizzaJson.map((pizza, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true)

    // Informações da pizza 
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()

        let key = e.target.closest('.pizza-item').getAttribute('data-key')

        modalQt = 1
        modalKey = key

        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })
        c('.pizzaInfo--qt').innerHTML = modalQt

        c('.pizzaWindowArea').style.opacity = '0'
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = '1'
        }, 200)




    })

    //Fim Informações da pizza
    c('.pizza-area').append(pizzaItem)
})

// Eventos do Modal 


//Quantidade de pizzas
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--
        c('.pizzaInfo--qt').innerHTML = modalQt
    }
})


c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt
})

// Fechamento do modal
const closeModal = () => {

    c('.pizzaWindowArea').style.opacity = '0'
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none'

    }, 500)
}


// Seleção do tamanho 

cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        c('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
    })
})



// Carrinho

c('.pizzaInfo--addButton').addEventListener('click', () => {

    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'))


    let identificador = pizzaJson[modalKey].id+'@'+size

    let key = carrinho.findIndex((item)=> item.identificador == identificador)

    if (key > -1) {
        carrinho[key].qt += modalQt
    }else {
        carrinho.push({
            identificador,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        })
    
    }

    attCarrinho()
    closeModal()
})

const attCarrinho = ()=> {

    if (carrinho.length > 0 ) {
        
        c('aside').classList.add('show')

     for (const i in carrinho) {
         
        let pizzaItem = pizzaJson.find((item)=>item.id == carrinho[i].id)
        
     }

    } else {
        c('aside').classList.remove('show')
    }

}