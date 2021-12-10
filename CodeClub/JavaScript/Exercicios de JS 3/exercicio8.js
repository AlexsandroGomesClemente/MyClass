const client = {
    Nome : `Alex`,
    valorCompra:70,
    primeiraCompra:true,
    pagamentoVista:true
}
const client2 = {
    Nome : `Carol`,
    valorCompra:250,
    primeiraCompra:false,
    pagamentoVista:false
}

let desconto = (client) => {
    if(client.primeiraCompra == true && client.pagamentoVista == true && client.valorCompra >= 1000){
        console.log(`Parábens você ganhou 30% de desconto`)
    }else if(client.primeiraCompra == true && client.pagamentoVista == true && client.valorCompra >= 500 ){
        console.log(`Parabéns você ganhou 25% de desconto`)
    }else if(client.primeiraCompra == true && client.pagamentoVista == true && client.valorCompra < 500){
        console.log(`Parabéns você ganhou 20% de desconto`)
    }
}

desconto(client)