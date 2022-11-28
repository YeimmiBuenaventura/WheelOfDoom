//En este script se aplica las funcionalidades de las 4 vistas principales del juego, divididas en, Inicio del Juego, Lista de Jugadores, Game y Gameover.

// Se declaran las variables de la vista de Lista de jugadores traidas con su respectiva clase de lista.html, de esta forma se declaran 5 variables principales para darle funcionalidad a esta vista 
let namePlayer = document.querySelector('letra-2'); // 
let listPlayer = document.querySelector('.list-player');
let playOverride= document.querySelector('.play_override');
let add = document.getElementById('add');
let players = [];


const deleteButtonHandler = (e) => {
  let idToDelete = e.target.id;
  players = players.filter((player) => player.id != idToDelete);
  guardarEnStorage(players);
  render();
};

add.addEventListener("click", (e) => {
    e.preventDefault();
    let player2 = document.getElementById('letra-2')
    let idNewPlayer = players.length;
  
    let nameNewPlayer = player2.value;
    if (player2.value == "") {
      Swal.fire({ title: 'Please write a name', background:"#AF1212", color:"white", confirmButtonColor:"black", showClass: { popup: 'animate__animated animate__fadeInDown' }, hideClass: { popup: 'animate__animated animate__fadeOutUp' } }) 
    } else {
      players.push({
        id: idNewPlayer,
        playerName: nameNewPlayer,
        isDead: false,
      });
      console.log(players);
    }
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src= "sonidos/lobby-sound.wav"
    player.value = "";
    audio.play()
    render();
    guardarEnStorage(players);
});
  
  // doom
  const render = () => {
    let htmlPlayers = ``;
    let listPlayers = document.getElementById("listOfPlayers");
  
    players.forEach(
      (player) =>
        {htmlPlayers += `<li class="item_list_player" >
            <p class="player_name">${player.playerName}</p>
            <i class="bi bi-trash-fill player_delete"id="${player.id}"></i>
            </li>`}
    );
    listPlayers.innerHTML = htmlPlayers;
    addDeleteButton();
  };
  
  const addDeleteButton = (e) => {
    let deletePlayer = document.querySelectorAll(".player_delete");
  
    deletePlayer.forEach((deleteButton) =>
      deleteButton.addEventListener("click", deleteButtonHandler)
    );
  };
  
  render();
  
  function guardarEnStorage(object) {
    let playersLocal = object;
  
    localStorage.setItem("playersKey", JSON.stringify(playersLocal));
  }
