const lista = document.getElementsByClassName('.itemlist');
var overlay = document.getElementById('over');
var pop = document.getElementById('popUp');
var close = document.getElementsByClassName('.next');

function pop (lista){
    let listaInicial = lista.size();
    if( listaInicial != 0){
        overlay.classList.add('active');
    }else{

    }
    
}
