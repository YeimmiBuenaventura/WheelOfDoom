
// --------------------JAVASCRIPT JUEGO.HTML--------------------//
// Mediante este javascript creamos 4 variables, con ellas llamamos a los nodos del HTML creado para la vista del juego. Con estas variables llamamos al botón de disparar, y a los 3 canvas que contienen a las animaciones del killer y la víctima.
let botonDisparo = document.getElementById("disparar")
let canvasVictima = document.getElementById("victima")
let canvasKillerCel = document.getElementById("killerCel")
let canvasKiller = document.getElementById("killer")

let jugador_nombre = document.getElementById('jugador_nombre');

// Se creo un evento de click sobre el botón para que ejecutara la función de iniciar, la cual permitiría realizar los cambios en las animaciones. Entre ellos que mediante un keyframe el killer realizara la acción de disparar y respecto de la víctima que la animación inicial se detuviera y se mostrara la última vista de la víctima que es ya muerto.
botonDisparo.addEventListener("click", disparar);


function disparar (){
    //Llamando estilos nuevos al ejecutar el addEventListener
    canvasKillerCel.classList.add("killerDisparandoCel") 
    canvasVictima.classList.add("muerto")
    canvasKiller.classList.add("killerDisparando")
    //Agregando el audio que corresponde al sonido del disparo, creando un nuevo elemento (document.createElement), agregando el mismo por medio del src. y llamandolo a ejecución por medio del play
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src= "sonidos/disparos.wav";
    audio.volume = 0.4;
    audio.play()  
    globalPlayers.splice(currentSelectedIndex, 1);//El metodo splice nos permite eliminar, añadir o reemplazar los elementos de un arreglo; le indicamos que elimine el primer elemento del currentSelectedIndex que equivale a los nombres de los jugadores de la lista.
    
    setTimeout(()=>{ //Este metodo nos permite llamar una función dado un determinado tiempo
        Swal.fire({ title: `Jugador ${currentSelected.playerName} muerto`, background:"#AF1212", color:"white", confirmButtonColor:"black", showClass: { popup: 'animate__animated animate__fadeInDown' }, hideClass: { popup: 'animate__animated animate__fadeOutUp' } }).then(()=>{
        canvasKillerCel.classList.remove("killerDisparandoCel")
        canvasVictima.classList.remove("muerto")
        canvasKiller.classList.remove("killerDisparando")


        selectPlayer();//Esta función nos permite llevar el conteo de los jugadores que aun existen en el array
    })

    },1000)
}

//Esta función trae la lista de jugadores
function getPlayers() {
    const jugadores = JSON.parse(localStorage.getItem('playersKey')); //Asignamos la lista a una nueva variable jugadores que los extrae del localStorage
    return jugadores; //Devuelve la lsita de jugadores
}

var globalPlayers = getPlayers(); //Asignamos  la varibale globalPlayers la funcion getPlayers
var currentSelected = {}; //Asignamos a la variable currentSelected un objeto
var currentSelectedIndex = 0; //Inicializamos la variable currentSelectedIndex

//Esta función nos permite verificar si el array esta vacio
function selectPlayer() {

    if(globalPlayers.length < 1 ) { //Se aplica este condicional indicando que si 1 es mayor al largo de la lista globalPlayers aperturara la ventana correspondiente a gameOver.html
        window.location.href = "/gameOver.html";
    }

    const players = globalPlayers; //Asignamos a la variable player la lista de jugadores
    const randomIndex = Math.floor(Math.random() * (players.length)); //Asignamos a la variable randomIndex, le indicamos que devuelva el maximo entero(Math.floor) de la extraccion aleatoria (Math.random) del la lista players.
    const selectedPlayer = players[randomIndex]; //Asignamos una variable que corresponde al jugador proveniente del random ejecutado
    currentSelectedIndex = randomIndex; //Reasignamos valores a currentSelectedIndex
    currentSelected = selectedPlayer; //Agregamos el objeto a la varible currentSelected
    jugador_nombre.innerHTML = selectedPlayer.playerName;//Reasignamos los valores de jugador_nombre
    return selectedPlayer;
}

selectPlayer(); //Llamamos a ejecución la función