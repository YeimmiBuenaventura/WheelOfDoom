
//En este script se aplica las funcionalidades de las 4 vistas principales del juego, divididas en, Inicio del Juego, Lista de Jugadores, Game y Gameover.

// Se declaran las variables de la vista de Lista de jugadores traidas con su respectiva clase de lista.html, de esta forma se declaran 3 variables principales para darle funcionalidad a esta vista 

let add = document.getElementById('add');//Se llama el id add del html para ponerle funcionalidad al icono de agregar
let player2 = document.getElementById('letra-2')//Se llama el id del input en html para poder agregarle la funcionalidad correspondiente
let players = [];//Se declara un array donde se guardaran los jugadores que se introduzcan



// se reconoce el elemento de audio
const audio = document.createElement("audio");
audio.preload = "auto";
audio.src= "sonidos/lobby-sound.wav"
audio.volume = 0.2; 

 // se hace play al audio
audio.play();


// se trae el nodo input del html, en donde se ingresan los jugadores, se agrega el evento .addEventListener keydown "tecla abajo", para reconocer cuando se presiona una tecla, en una condicional se pregunta si es la tecla enter y se ejecuta la funcion que agrega al juegador
document.getElementById('letra-2').addEventListener('keydown',(e)=>{
  if (e.which === 13) {
    addplayers(e);
  }
});

function addplayers(e){

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

    player2.value = "";
    
    // se renderiza la lista con los nuevos elementos del  array
    render();
    // se guarda en el local storage el array
    guardarEnStorage(players);
}

/**
 * @event
 * * Evento click para el proceso de agregar el nombre a la lista
 */
add.addEventListener("click", addplayers);
  

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
  addDeleteButton();//Se llama a la funci??n para darle funcionalidad al icono de borrar cada nombre ingresado
};

//Se crea una constante para agregar el boton Delete  
const addDeleteButton = (e) => {
  let deletePlayer = document.querySelectorAll(".delete"); //Se crea una variable a la cual se le adjudica la clase delete, que aunque no este llamada en el html se crea en la const render, corresponde al icono  
  deletePlayer.forEach((deleteButton) => //Se crea un ciclo foreach para indicarle al sistema que adjudique un icono delete por cada jugador
    deleteButton.addEventListener("click", deletePlayerButton) //Indicamos que escuche el evento y al hacer click ejecute la funci??n deletePlayerButton.
  );
};
//Se crea una constante para eliminar el jugador de la lista si es requerido
const deletePlayerButton = (e) => {
  let idToDelete = e.target.id; //Se crea una variable que corresponde al evento "Click" que se realice al id, en este caso el icono Delete
  players = players.filter((player) => player.id != idToDelete); //Players sera igual a la busqueda en el array; en la cual se comprobara que el player.id sea diferente al idToDelete
  guardarEnStorage(players); //Ejecutamos la funci??n guardarEnStorage que recibe un objeto en este caso players
  render(); //Metodo utilizado para renderizar la web luego de generar modificaciones
};
  
render(); //Metodo utilizado para renderizar la web luego de generar modificaciones

//Funci??n para actualizar informaci??n 
function guardarEnStorage(object) {
  let playersLocal = object; //Creamos una variable que corresponde al objeto que ingresa como parametro
  localStorage.setItem("playersKey", JSON.stringify(playersLocal)); //usamos el metodo setItem que nos permite a??adir o actualizar el storage; JSON.stringify nos permite cambiar los valores js a una cadena JSON
}
