let namePlayer = document.querySelector('.name-player');
let listPlayer = document.querySelector('.list-player');
let playOverride= document.querySelector('play_override');
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
    let namePlayer = document.querySelector('.name-player');
    
    let idNewPlayer = players.length;
  
    let nameNewPlayer = namePlayer.value;
    if (namePlayer.value == "") {
      alert("please enter a valid name");
    } else {
      players.push({
        id: idNewPlayer,
        playerName: nameNewPlayer,
        isDead: false,
      });
    }
    namePlayer.value = "";
    soundAddPlayer.play()
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