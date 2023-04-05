const text = document.getElementById("text");
const btn = document.getElementById("btn");
var questions = parseInt(prompt("¿cuantas actividades tienes en mente?"));
var actividades = [];
btn.addEventListener("click", re);
var p = true;

for (let i = 0; i < questions; i++){
	let con = prompt("diga una actividad");
	actividades.push(con);
	con = ""
}

function re(){
	var resul = "";
	var resul = actividades[Math.floor(Math.random() * actividades.length)];
	text.innerText=resul;
	if (p == true){
		text.style="animation-name:'inan'"
		p = false;
	}
	else{
		text.style="animation-name:'anin'"
		p = true;
	}

	
}


