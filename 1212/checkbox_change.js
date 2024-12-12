var el=document.getElementById("subscribe");
el.addEventListener("change",()=>{
    if(el.checked) {
        alert("✔ Feliratkoztál");
    } else {
        alert("✖ Leiratkoztál");
    }
})