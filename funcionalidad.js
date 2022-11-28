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




