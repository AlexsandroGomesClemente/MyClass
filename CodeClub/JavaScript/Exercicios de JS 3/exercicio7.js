let valueInitial = 5000
let valueInvestiment = 10000
let mounthInvestiment = 24

function calcTaxa (valueInitial, valueInvestiment, mounthInvestiment){
    let taxa = (valueInvestiment - valueInitial) / (valueInitial * mounthInvestiment)
    return taxa


}

console.log(calcTaxa(valueInitial,valueInvestiment,mounthInvestiment));