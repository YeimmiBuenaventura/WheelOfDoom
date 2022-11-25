

//-------------------JAVASCRIPT INDEX.HTML--------------------


//--------------------JAVASCRIPT LISTA.HTML--------------------

// --------------------JAVASCRIPT JUEGO.HTML--------------------

//CÓDIGO ANIMACIÓN MUÑEQUITO
        var contexto;
        var imagenes = [];
        var pos = 0;

        function iniciar (){
            var canvas = document.getElementById("jugador");
            canvas.width = 1200;
            canvas.height = 1200;
            contexto = canvas.getContext("2d");
            for(i=0; i < 6; ++i)
            {
                imagenes [i] = new Image();
                imagenes [i].src = "imagenes/ilustraciones/victim/"+(i+1) +".png";
            }
            setInterval(animar, 300 );
        }
        function animar(){
            contexto.drawImage(imagenes[pos], 0, 0);
            ++pos; if(pos == 6) pos = 0;
        }
//FINALIZACIÓN ANIMACIÓN MUÑEQUITO
// CÓDIGO ANIMACIÓN KILLER
        var contexto;
        var imagenes = [];
        var pos = 0;

        function asesino (){
            var canvas = document.getElementById("matador");
            canvas.width = 1200;
            canvas.height = 1200;
            contexto = canvas.getContext("2d");
            for(i=0; i < 6; ++i)
            {
                imagenes [i] = new Image();
                imagenes [i].src = "imagenes/ilustraciones/victim/"+(i+1) +".png";
            }
            setInterval(animar, 300 );
        }
        function animar(){
            contexto.drawImage(imagenes[pos], 0, 0);
            ++pos; if(pos == 6) pos = 0;
        }

//--------------------JAVASCRIPT GAME OVER--------------------