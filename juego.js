
// --------------------JAVASCRIPT JUEGO.HTML--------------------//
// Mediante este javascript creamos 4 variables, con ellas llamamos a los nodos del HTML creado para la vista del juego. Con estas variables llamamos al botón de disparar, y a los 3 canvas que contienen a las animaciones del killer y la víctima.
let botonDisparo = document.getElementById("disparar")
let canvasVictima = document.getElementById("victima")
let canvasKillerCel = document.getElementById("killerCel")
let canvasKiller = document.getElementById("killer")

// Se creo un evento de click sobre el botón para que ejecutara la función de iniciar, la cual permitiría realizar los cambios en las animaciones. Entre ellos que mediante un keyframe el killer realizara la acción de disparar y respecto de la víctima que la animación inicial se detuviera y se m ostrara la última vista de la víctima que es ya muerto.
botonDisparo.addEventListener("click", iniciar);

function iniciar (){
    canvasKillerCel.classList.add("killerDisparandoCel")
    canvasVictima.classList.add("muerto")
    canvasKiller.classList.add("killerDisparando")
}

