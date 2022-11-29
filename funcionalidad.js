

//-------------------JAVASCRIPT INDEX.HTML--------------------


//--------------------JAVASCRIPT LISTA.HTML--------------------

// --------------------JAVASCRIPT JUEGO.HTML--------------------
let botonDisparo = document.getElementById("disparar")
let canvasVictima = document.getElementById("victima")
let canvasKillerCel = document.getElementById("killerCel")
let canvaKiller = document.getElementById("killer")

botonDisparo.addEventListener("click", iniciar);

function iniciar (){
    canvasKillerCel.classList.add("killerDisparandoCel")
    canvasVictima.classList.add("muerto")
    canvasVictima.classList.add("killerDisparando")
}

//CÓDIGO ANIMACIÓN MUÑEQUITO
//FINALIZACIÓN ANIMACIÓN MUÑEQUITO
// CÓDIGO ANIMACIÓN KILLER

//--------------------JAVASCRIPT GAME OVER--------------------