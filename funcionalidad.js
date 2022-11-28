//En este script se aplica las funcionalidades de las 4 vistas principales del juego, divididas en, Inicio del Juego, Lista de Jugadores, Game y Gameover.

// Se declaran las variables de la vista de Lista de jugadores traidas con su respectiva clase de lista.html, de esta forma se declaran 3 variables principales para darle funcionalidad a esta vista 
let add = document.getElementById('add');
let player2 = document.getElementById('letra-2')
let players = [];
/**
 * @event
 * * Evento click para el proceso de agregar el nombre a la lista
 */
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
  
const render = () => {
  let htmlPlayers = ``;
  let list = document.getElementById("list");
  
  players.forEach(
    (player) =>
      (htmlPlayers += `<li class="itemList" >
        <p class="playersName">${player.playerName}</p>
        <i class="bi bi-trash3-fill delete"id="${player.id}"></i>
        </li>`)
  );
  list.innerHTML = htmlPlayers;
  addDeleteButton();
};
  
const addDeleteButton = (e) => {
  let deletePlayer = document.querySelectorAll(".delete");
  
  deletePlayer.forEach((deleteButton) =>
    deleteButton.addEventListener("click", deletePlayerButton)
  );
};

const deletePlayerButton = (e) => {
  let idToDelete = e.target.id;
  players = players.filter((player) => player.id != idToDelete);
  guardarEnStorage(players);
  render();
};
  
render();
  
function guardarEnStorage(object) {
  let playersLocal = object;
  
  localStorage.setItem("playersKey", JSON.stringify(playersLocal));
}
