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


    let identificador = pizzaJson[modalKey].id + '@' + size

    let key = carrinho.findIndex((item) => item.identificador == identificador)

    if (key > -1) {
        carrinho[key].qt += modalQt
    } else {
        carrinho.push({
            identificador,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        })

    }
    closeModal()
    attCarrinho()
   
})

const attCarrinho = () => {

    if (carrinho.length > 0) {

        c('aside').classList.add('show')
        c('.cart').innerHTML = ''


        let subTotal = 0
        let desconto = 0
        let total = 0

        for (const i in carrinho) {

            subTotal += pizzaItem.price * cart[i].qt
            let pizzaItem = pizzaJson.find((item) => item.id == carrinho[i].id)
            let cartItem = c('.models .cart--item').cloneNode(true)

            let pizzaSizeName
            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'P'
                    break;
                case 1:
                    pizzaSizeName = 'M'
                    break;

                case 2:
                    pizzaSizeName = 'G'
                    break;

                default:
                    break;
            }

            let pizzaName = `${pizzaItem.name}(${pizzaSizeName})`

            cartItem.querySelector('.img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i] > 1) {
                    cart[i].qt--
                } else {
                    cart.splice(i, 1)
                }

                attCarrinho()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++
                attCarrinho()
            })

            c('.cart').append(cartItem)
        }

        desconto = subTotal * 0.1
        total = subTotal - desconto

        c('subtotal span:last-child').innerHTML = ` R$  ${subTotal.toFixed(2)}`
        c('desconto span:last-child').innerHTML = ` R$ ${desconto.toFixed(2)}`
        c('total span:last-child').innerHTML = ` R$ ${total.toFixed(2)}`
    } else {
        c('aside').classList.remove('show')
    }

}