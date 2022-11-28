let add = document.getElementById('add');
let player2 = document.getElementById('letra-2')
let players = [];


add.addEventListener("click", (e) => {
    e.preventDefault();
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
    }
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src= "sonidos/lobby-sound.wav"
    player2.value = "";
    audio.play()
    render();
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