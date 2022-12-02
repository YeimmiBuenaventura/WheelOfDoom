
// --------------------JAVASCRIPT JUEGO.HTML--------------------//
// Mediante este javascript creamos 4 variables, con ellas llamamos a los nodos del HTML creado para la vista del juego. Con estas variables llamamos al botón de disparar, y a los 3 canvas que contienen a las animaciones del killer y la víctima.
let botonDisparo = document.getElementById("disparar")
let canvasVictima = document.getElementById("victima")
let canvasKillerCel = document.getElementById("killerCel")
let canvasKiller = document.getElementById("killer")

let jugador_nombre = document.getElementById('jugador_nombre');

// Se creo un evento de click sobre el botón para que ejecutara la función de iniciar, la cual permitiría realizar los cambios en las animaciones. Entre ellos que mediante un keyframe el killer realizara la acción de disparar y respecto de la víctima que la animación inicial se detuviera y se m ostrara la última vista de la víctima que es ya muerto.
botonDisparo.addEventListener("click", disparar);

function disparar (){
    canvasKillerCel.classList.add("killerDisparandoCel")
    canvasVictima.classList.add("muerto")
    canvasKiller.classList.add("killerDisparando")

    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src= "sonidos/disparos.wav";
    audio.volume = 0.4;
    audio.play()  
    globalPlayers.splice(currentSelectedIndex, 1);
    
    Swal.fire({ title: `Jugador ${currentSelected.playerName} muerto`, background:"#AF1212", color:"white", confirmButtonColor:"black", showClass: { popup: 'animate__animated animate__fadeInDown' }, hideClass: { popup: 'animate__animated animate__fadeOutUp' } }).then(()=>{
        canvasKillerCel.classList.remove("killerDisparandoCel")
        canvasVictima.classList.remove("muerto")
        canvasKiller.classList.remove("killerDisparando")


        selectPlayer();
    })

    
}


function getPlayers() {
    const jugadores = JSON.parse(localStorage.getItem('playersKey'));
    return jugadores;
}

var globalPlayers = getPlayers();
var currentSelected = {};
var currentSelectedIndex = 0;

function selectPlayer() {

    if(globalPlayers.length < 1 ) {
        window.location.href = "/gameOver.html";
    }

    const players = globalPlayers;
    const randomIndex = Math.floor(Math.random() * (players.length));
    const selectedPlayer = players[randomIndex];
    currentSelectedIndex = randomIndex;
    currentSelected = selectedPlayer;
    jugador_nombre.innerHTML = selectedPlayer.playerName;
    return selectedPlayer;
}

selectPlayer();