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
  let playersLocal = object; //Creamos una variable que corresponde al objeto que ingresa como parametro
  localStorage.setItem("playersKey", JSON.stringify(playersLocal)); //usamos el metodo setItem que nos permite añadir o actualizar el storage; JSON.stringify nos permite cambiar los valores js a una cadena JSON
}
