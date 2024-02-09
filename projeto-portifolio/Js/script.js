var uni = document.querySelector(".uni")
var uninga = document.querySelector(".uninga")
var fecharUni = document.querySelector(".fecharUni")

uni.addEventListener("click", function(){
    uninga.style.display = "block";
    alura.style.display = "none";
    udemy.style.display = "none";
    robotica.style.display = "none";
    cecapi.style.display = "none";
    pioli.style.display = "none";
})

fecharUni.addEventListener("click", function(){
    uninga.style.display = "none";    
})

var alu = document.querySelector(".alu")
var alura = document.querySelector(".alura")
var fecharAlu = document.querySelector(".fecharAlu")

alu.addEventListener("click", function(){
    alura.style.display = "block";
    uninga.style.display = "none";
    udemy.style.display = "none";
    robotica.style.display = "none";
    cecapi.style.display = "none";
    pioli.style.display = "none";
})

fecharAlu.addEventListener("click", function(){
    alura.style.display = "none";    
})

var ude = document.querySelector(".ude")
var udemy = document.querySelector(".udemy")
var fecharUde = document.querySelector(".fecharUde")

ude.addEventListener("click", function(){
    udemy.style.display = "block";
    uninga.style.display = "none";
    alura.style.display = "none";
    robotica.style.display = "none";
    cecapi.style.display = "none";
    pioli.style.display = "none";
})

fecharUde.addEventListener("click", function(){
    udemy.style.display = "none";    
})

var rob = document.querySelector(".rob")
var robotica = document.querySelector(".robotica")
var fecharSen = document.querySelector(".fecharSen")

rob.addEventListener("click", function(){
    robotica.style.display = "block";
    uninga.style.display = "none";
    alura.style.display = "none";
    udemy.style.display = "none";
    cecapi.style.display = "none";
    pioli.style.display = "none";
})

fecharSen.addEventListener("click", function(){
    robotica.style.display = "none";    
})

var cec = document.querySelector(".cec")
var cecapi = document.querySelector(".cecapi")
var fecharCec = document.querySelector(".fecharCec")

cec.addEventListener("click", function(){
    cecapi.style.display = "block";
    uninga.style.display = "none";
    alura.style.display = "none";
    udemy.style.display = "none";
    robotica.style.display = "none";
    pioli.style.display = "none";
})

fecharCec.addEventListener("click", function(){
    cecapi.style.display = "none";    
})

var pio = document.querySelector(".pio")
var pioli = document.querySelector(".pioli")
var fecharPioli = document.querySelector(".fecharPioli")

pio.addEventListener("click", function(){
    pioli.style.display = "block";
    uninga.style.display = "none";
    alura.style.display = "none";
    udemy.style.display = "none";
    robotica.style.display = "none";
    cecapi.style.display = "none";
})

fecharPioli.addEventListener("click", function(){
    pioli.style.display = "none";    
})