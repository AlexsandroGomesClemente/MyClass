const client = {
    Nome : `Alex`,
    valorCompra:7000,
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
        let desconto = 300/1000
        console.log(`Obrigado pela a compra`)
        console.log(`Parábens você ganhou 30% de desconto`)
        console.log(`Sua compra ficou no total de ${client.valorCompra} e com o desconto ficou ${client.valorCompra - desconto }`)
    }else if(client.primeiraCompra == true && client.pagamentoVista == true && client.valorCompra >= 500 ){
        console.log(`Parabéns você ganhou 25% de desconto`)
    }else if(client.primeiraCompra == true && client.pagamentoVista == true && client.valorCompra < 500){
        console.log(`Parabéns você ganhou 20% de desconto`)
    }else if (client.primeiraCompra == true && client.pagamentoVista == false && client.valorCompra >= 1000){
        console.log(`Parabéns você ganhou 20% de desconto`)
    }else if (client.primeiraCompra == true && client.pagamentoVista == false && client.valorCompra >= 500 ){
        console.log(`Parábens você ganhou 15% de desconto`)
    }else if(client.primeiraCompra == true && client.pagamentoVista == false && client.valorCompra < 500){
        console.log(`Parabéns você ganhou 10% de desconto`)
    }else if (client.primeiraCompra == false && client.pagamentoVista == true && client.valorCompra >= 1000){
        console.log(`Parabéns você ganhou 20% de desconto`)
    }else if (client.primeiraCompra == false && client.pagamentoVista == true && client.valorCompra >= 500 ){
        console.log(`Parábens você ganhou 15% de desconto`)
    }else if(client.primeiraCompra == false && client.pagamentoVista == true && client.valorCompra < 500){
        console.log(`Parabéns você ganhou 10% de desconto`)
    }else if (client.primeiraCompra == false && client.pagamentoVista == false && client.valorCompra >= 1000){
        console.log(`Parabéns você ganhou 10% de desconto`)
    }else if (client.primeiraCompra == false && client.pagamentoVista == false && client.valorCompra >= 500 ){
        console.log(`Parábens você ganhou 5% de desconto`)
    }else if(client.primeiraCompra == false && client.pagamentoVista == false && client.valorCompra < 500){
        console.log(`Desculpe mais você não ganhou desconto`)
    }
}
desconto(client)
