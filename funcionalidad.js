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