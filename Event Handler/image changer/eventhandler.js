var image = document.getElementById("blur");

window.onload = init;
function init(){
    image.onclick = removeBlur;
}

function removeBlur(){
    image.src ="Dusky Beach.jpg";
}

