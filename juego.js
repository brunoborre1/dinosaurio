document.addEventListener('keyboard', function(evento){
    if(evento.keyCode == 32){
        console.log(salta);
    }
});

var ancho = 700;
var alto = 300;
var canvas,ctx;

function inicializada(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
}

function borraCanvas(){
    canvas.width = ancho;
    canvas.heigth = alto;
}


//-----------------------------------------

//BUCLE PRINCIPAL
var FPS = 10;
setInterval(function(){
    principal();
},1000/10);

function principal(){

}