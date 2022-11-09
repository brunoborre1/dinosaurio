document.addEventListener('keyboard', function(evento){
    if(evento.keyCode == 32){
        console.log(salta);
    }
});


var imgRex, imgNube, imgCactus, imgSuelo;
function cargaImagenes(){
    imgRex = new Image();
    imgNube = new Image();
    imgCactus = new Image();
    imgSuelo = new Image();

    imgRex.src = img/imgRex.png;
    imgNube.src = img/imgNube.png;
    imgCactus.src = img/imgCactus.png;
    imgSuelo.src = img/imgSuelo.png;
}


var ancho = 700;
var alto = 300;
var canvas,ctx;

function inicializada(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    cargaImagenes();

}

function borraCanvas(){
    canvas.width = ancho;
    canvas.heigth = alto;
}

function dibujaRex(){
    ctx.drawImage(imgRex,0,0,64,69,100,100,50,50);
}


//-----------------------------------------

//BUCLE PRINCIPAL
var FPS = 10;
setInterval(function(){
    principal();
},1000/10);

function principal(){
    borraCanvas();
    dibujaRex();
}