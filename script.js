var bg = document.querySelector(".bg-animation");
var sol = document.querySelector("#sol");
var luna = document.querySelector("#luna");
var cuerpo = document.querySelector("cuerpo");
var CambiarModo = document.querySelector(".CambiarModo");

sol.style.display="block";

var cambioModo = 0;
CambiarModo.addEventListener("click",function(){
    if(cambioModo === 0){
        luna.style.display = "block"
        sol.style.display = "none"
        document.documentElement.style.setProperty('--color-back','#18191d')
        document.documentElement.style.setProperty('--color-font',' #fff')
        document.documentElement.style.setProperty('--color-titulos','#73a8d0')
        document.documentElement.style.setProperty('--color-black','#000')
        document.documentElement.style.setProperty('--color-button',' #73a8d0')
        cambioModo = 1;
        console.log("noche")

    }else{
        luna.style.display = "none"
        sol.style.display = "block"
        document.documentElement.style.setProperty('--color-back','#fff')
        document.documentElement.style.setProperty('--color-font',' #18191d')
        document.documentElement.style.setProperty('--color-button',' #312b44')
        cambioModo = 0;
        console.log("dia")
    }
})
