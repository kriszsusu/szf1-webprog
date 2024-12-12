var el=document.getElementById("foodForm");
el.addEventListener("change",(e)=>{
    document.getElementById("foodOutput").innerHTML=`Kijelölt étel: ${e.target.value}`;
})