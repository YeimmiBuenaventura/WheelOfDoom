//En este script se aplica las funcionalidades de las 4 vistas principales del juego, divididas en, Inicio del Juego, Lista de Jugadores, Game y Gameover.

// Se declaran las variables de la vista de Lista de jugadores traidas con su respectiva clase de lista.html, de esta forma se declaran 3 variables principales para darle funcionalidad a esta vista
let add = document.getElementById('add');//Se llama el id add del html para ponerle funcionalidad al icono de agregar
let player2 = document.getElementById('letra-2')//Se llama el id del input en html para poder agregarle la funcionalidad correspondiente
let players = [];//Se declara un array donde se guardaran los jugadores que se introduzcan


add.addEventListener("click", (e) => {
    e.preventDefault();

    // Se genera un identificador unico basado en la longitud del array jugadores existente
    let idNewPlayer = players.length;

    // el nombre del jugador se define basado en el valor del input
    let nameNewPlayer = player2.value;
    if (nameNewPlayer == "") {
      // Si el nombre es un string vacio se muestra un aviso que indica que por favor ingrese el nombre del jugador
      Swal.fire({ title: 'Please write a name', background:"#AF1212", color:"white", confirmButtonColor:"black", showClass: { popup: 'animate__animated animate__fadeInDown' }, hideClass: { popup: 'animate__animated animate__fadeOutUp' } }) 
    } else {
      // de lo contrario se agrega al array un objeto con el identificador y el nombre 
      players.push({
        id: idNewPlayer,
        playerName: nameNewPlayer,
        isDead: false,
      });
    }

    // se reconoce el elemento de audio
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src= "sonidos/lobby-sound.wav"
    player2.value = "";
    // se hace play al audio
    audio.play()
    // se renderiza la lista con los nuevos elementos del  array
    render();
    // se guarda en el local storage el array
    guardarEnStorage(players);
});
  
const render = () => {//Se declara una variable constante como objeto donde se busca crear nuevos objetos en el html a partir de javaScript para que aparezcan solo cuando sea pertinente 
  let htmlPlayers = ``;//Se crea una nueva variable de tipo string vacia donde se sumara cada objeto a la lista a medida que los vaya agregando el usuario
   
  let list = document.getElementById("list");//Se llama desde el html el id list para indicarle donde se guardaran en el html los objetos creados desde javaScript
  
  players.forEach(//Se usa el metodo for each para recorrer todos los elementos del array
    (player) =>/* Se crea un objeto de tipo lista la cual contendra el nombre de cada jugador ingresado, agregando un icono 
    para eliminar el nombre del jugador de la lista cuando lo desee el usuario*/
      (htmlPlayers += `<li class="itemList" >
        <p class="playersName">${player.playerName}</p>
        <i class="bi bi-trash3-fill delete"id="${player.id}"></i>
        </li>`)
  );
  list.innerHTML = htmlPlayers;//Se llama a la variable list y se utiliza el metodo para indicar que se agregaran los objetos creados desde javaScript al html cuado corresponda
  addDeleteButton();//Se llama a la función para darle funcionalidad al icono de borrar cada nombre ingresado
};

//Se crea una constante para agregar el boton Delete  
const addDeleteButton = (e) => {
  let deletePlayer = document.querySelectorAll(".delete"); //Se crea una variable a la cual se le adjudica la clase delete, que aunque no este llamada en el html se crea en la const render, corresponde al icono  
  deletePlayer.forEach((deleteButton) => //Se crea un ciclo foreach para indicarle al sistema que adjudique un icono delete por cada jugador
    deleteButton.addEventListener("click", deletePlayerButton) //Indicamos que escuche el evento y al hacer click ejecute la función deletePlayerButton.
  );
};
//Se crea una constante para eliminar el jugador de la lista si es requerido
const deletePlayerButton = (e) => {
  let idToDelete = e.target.id; //Se crea una variable que corresponde al evento "Click" que se realice al id, en este caso el icono Delete
  players = players.filter((player) => player.id != idToDelete); //Players sera igual a la busqueda en el array; en la cual se comprobara que el player.id sea diferente al idToDelete
  guardarEnStorage(players); //Ejecutamos la función guardarEnStorage que recibe un objeto en este caso players
  render(); //Metodo utilizado para renderizar la web luego de generar modificaciones
};
  
render(); //Metodo utilizado para renderizar la web luego de generar modificaciones

//Función para actualizar información 
function guardarEnStorage(object) {
  let playersLocal = object; //Se crea una variable que recibe el parametro 
  
  localStorage.setItem("playersKey", JSON.stringify(playersLocal)); //Hacemos uso del metodo setItem que nos permite actualizar o crear un objeto; JSON.stringify cambia una cadena de js a JSON
}


//-------------------JAVASCRIPT INDEX.HTML--------------------


//--------------------JAVASCRIPT LISTA.HTML--------------------

// --------------------JAVASCRIPT JUEGO.HTML--------------------

//CÓDIGO ANIMACIÓN MUÑEQUITO
//FINALIZACIÓN ANIMACIÓN MUÑEQUITO
// CÓDIGO ANIMACIÓN KILLER

//--------------------JAVASCRIPT GAME OVER--------------------

var contexto;
var imagenes = [];
var pos2 = 0;
var contexto2;
var imagenes2 = [];
var pos = 0;

function iniciar() {
    var canvas = document.getElementById("lienzo");

    canvas.width = 1200;
    canvas.height = 900;

    contexto = canvas.getContext("2d");

    for (i = 0; i < 6; ++i) {
        imagenes[i] = new Image();
        imagenes[i].src = "./muñeco/" + (i + 1) + ".png";
    }

    setInterval(animar, 500);

    contexto2 = canvas.getContext("2d")

    for (i = 0; i < 2; ++i) {
        imagenes2[i] = new Image();
        imagenes2[i].src = "./muñeco rojo de lado/" + (i + 1) + ".jpg";
    }
    
    setInterval(animar2, 500);
    
}

function animar() {
    contexto.drawImage(imagenes[pos], 900, 20);
    ++pos; if (pos == 6) pos = 0;

}

function animar2() {
    contexto.drawImage(imagenes2[pos2], 10, 200);
    ++pos2; if (pos2 == 2) pos2 = 0;

}

// para celular 

var contexto;
var imagenes = [];
var pos2 = 0;
var contexto2;
var imagenes2 = [];
var pos = 0;

function iniciar() {
    var canvas = document.getElementById("lienzo");

    canvas.width = 1200;
    canvas.height = 900;

    contexto = canvas.getContext("2d");

    for (i = 0; i < 6; ++i) {
        imagenes[i] = new Image();
        imagenes[i].src = "./muñeco para celular/" + (i + 1) + ".png";
    }

    setInterval(animar, 500);

    contexto2 = canvas.getContext("2d")

    for (i = 0; i < 2; ++i) {
        imagenes2[i] = new Image();
        imagenes2[i].src = "./rojo para celular/" + (i + 1) + ".png";
    }
    
    setInterval(animar2, 500);
    
}

function animar() {
    contexto.drawImage(imagenes[pos], 500, 20);
    ++pos; if (pos == 6) pos = 0;

}

function animar2() {
    contexto.drawImage(imagenes2[pos2], 500, 400);
    ++pos2; if (pos2 == 2) pos2 = 0;

}






