//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
//A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - 
//O final da leitura de dados se dará com a entrada de um salário negativo. - 
//Faça isso usando uma função!

const habitantes = {
habitante1 : {nome:`João`, salario:2000, sons:2},
habitante2 : {nome:`Maria`, salario:1050, sons:3},
habitante3 : {nome:`Carlos`, salario:2100, sons:1},
habitante4 : {nome:`Bia`, salario:2500, sons:4},
habitante5 : {nome:`Alex`, salario:1500, sons:0}

}



function calcMedia(habitante1,habitante2,habitante3,habitante4,habitante5) {
    let res = (habitante1.salario + habitante2.salario + habitante3.salario + habitante4.salario + habitante5.salario) / 5
    let res2 = (habitante1.sons + habitante2.sons + habitante3.sons + habitante4.sons + habitante5.sons) / 5
    for (const salario in habitantes) {
        console.log(salario)
    }
    console.log(res, res2)
}


calcMedia(habitantes.habitante1 , habitantes.habitante2, habitantes.habitante3, habitantes.habitante4, habitantes.habitante5)


   
  
   