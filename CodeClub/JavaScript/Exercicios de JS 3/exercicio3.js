//[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 
function showTime () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    console.log(txt)
}

showTime()