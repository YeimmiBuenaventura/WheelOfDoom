var contexto;
var imagenes = [];
var pos = 0;

function iniciar (){
    var canvas = document.getElementById("lienzo")
    canvas.width = 1200;
    canvas.height = 1500;

    contexto = canvas.getContext("2d");

    for(i=0; i < 6; ++i)
    {
        imagenes [i] = new Image();
        imagenes [i].src = "imagenes/muñeco/"+(i+1) +".png";
    }

    setInterval(animar, 300 );
}

function animar(){
    contexto.drawImage(imagenes[pos], 0, 0);
    ++pos; if(pos == 6) pos = 0;
}

//JULI
let namePlayer = document.querySelector('letra-2'); //Se crea una variable namePlayer 
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
    let player = document.getElementById('letra-2')
    let idNewPlayer = players.length;
  
    let nameNewPlayer = player.value;
    if (player.value == "") {
      alert("please enter a valid name");
    } else {
      players.push({
        id: idNewPlayer,
        playerName: nameNewPlayer,
        isDead: false,
      });
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
        (htmlPlayers += `<li class="item_list_player" >
            <p class="player_name">${player.playerName}</p>
            <i class="bi bi-trash-fill player_delete"id="${player.id}"></i>
            </li>`)
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
