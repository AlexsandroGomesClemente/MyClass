function calcular() {

    const pt = parseInt(document.getElementById("pt").value) ;
    const mat = parseInt(document.getElementById("mat").value) ;
    const ins = parseInt(document.getElementById("in").value) ;
    const his = parseInt(document.getElementById("his").value) ;

    let res = (pt + mat + ins + his) / 4 ;

    if (res  ==  10 ) {
       alert(`Sua média foi ${res}, você foi Muito bem !`);
    } else if (res >= 6 ) {
        alert(`Sua média foi ${res}, você foi Aprovado`);
    } else { 
        alert(`Suas média foi ${res}, você foi Reprovado`);
    }

};