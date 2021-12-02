function Somar() {    
    let n1 = document.getElementById("a1");
    let n2 = document.getElementById("a2");

    let nn1 = parseInt(n1.value);
    let nn2 = parseInt(n2.value);

    let  res = nn1 + nn2 ; 
    
    alert(res);
}

function Subtrair() {
    let n1 = document.getElementById("s1");
    let n2 = document.getElementById("s2");

    let nn1 = parseInt(n1.value);
    let nn2 = parseInt(n2.value)

    let res = nn1 - nn2 ; 

    alert(res);
}

function Multiplicar() {
    let n1 = document.getElementById("m1");
    let n2 = document.getElementById("m2");

    let nn1 = parseInt(n1.value);
    let nn2 = parseInt(n2.value)

    let res = nn1 * nn2 ; 

    alert(res);
}

function Divisao() {
    let n1 = document.getElementById("d1");
    let n2 = document.getElementById("d2");

    let nn1 = parseInt(n1.value);
    let nn2 = parseInt(n2.value)

    let res = nn1 / nn2 ; 

    alert(res);
}