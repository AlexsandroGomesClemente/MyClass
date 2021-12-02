var eP = document.getElementById('eP') 

eP.addEventListener('focus', ()=> {
    eP.style.borderColor = "#4a5f6a";
});

eP.addEventListener('blur', ()=> {
    eP.style.borderColor = "#ccc";
});