// TUTORIAL
// https://developer.mozilla.org/en-US/docs/Games/Techniques/Crisp_pixel_art_look

/*
Para hacer gráficos pixelados, tenemos que hacerlo mediante CSS
1- El canvas debe de ser de un tamaño pequeño, en este caso 70x90 (lo definimos en la función "inicia")
2- Creamos un CSS para el canvas que especifique que hay que pixelar
3- Usamos la función "reescalaCanvas" para cambiar el atributo de estilo (no el tamaño real, sino el del style)
*/


var canvas;
var ctx;
var fps=50;


var foto;
var objImagen;



//MODIFICAMOS EL ESTILO CSS (por eso usamos canvas.style.width y no canvas.width)
function reescalaCanvas(){
	canvas.style.width = "700px";
	canvas.style.height = "900px";
}


function inicia(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	//PONEMOS EL TAMAÑO REAL DEL CANVAS
	canvas.width = 70;
	canvas.height= 90;
	
	//Cargamos la imagen
	foto = new Image();
	foto.src = 'img/01.jpg';
	
	objImagen = new imagen(foto);
	
	setInterval(function(){principal();},1000/fps);
	
	reescalaCanvas();
}


function borraCanvas(){
  canvas.width=canvas.width;
  canvas.height=canvas.height;
}


//OBJETO IMAGEN
var imagen = function(obj){
	this.x = 0;
	this.y = 0;
	
	this.tamanyo = 1;
	
	//Método que dibuja la imagen en pantalla
	this.dibuja = function(){
		ctx.drawImage(obj,this.x, this.y, obj.width*this.tamanyo, obj.height*this.tamanyo);
	}
	
}



function principal(){
	borraCanvas();
	objImagen.dibuja();
}