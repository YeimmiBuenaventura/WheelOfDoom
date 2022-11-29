let add = document.getElementById('add');//Se llama el id add del html para ponerle funcionalidad al icono de agregar
let player2 = document.getElementById('letra-2')//Se llama el id del input en html para poder agregarle la funcionalidad correspondiente
let players = [];//Se declara un array donde se guardaran los jugadores que se introduzcan


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
  
player2.addEventListener("keyup", function(i) {
  if (i.code === 'Enter') {
    add.click();
  }
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
