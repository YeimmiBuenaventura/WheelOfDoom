const SOUND = new Audio("/sonidos/lobby-sound.wav");

SOUND.autoplay('load', ()=>{
    SOUND.play();
})
