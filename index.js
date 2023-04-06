const text = document.getElementById("text");
const btn = document.getElementById("btn");
const elem = document.getElementById("elem");
var questions = parseInt(prompt("¿cuantas actividades tienes en mente?"));
var actividades = [];
btn.addEventListener("click", re);
var p = true;
var elemtex = ""


for (let i = 0; i < questions; i++){
	let con ={ title: prompt("diga una actividad"), cuenta: 0}
	actividades.push(con);
	con = ""
}




function re(){
	elemtex = "";
	var resul;
	var resul = actividades[Math.floor(Math.random() * actividades.length)];
	text.innerText=resul.title;
	resul.cuenta++;
	actividades.forEach(function(item, index){
	elemtex += item.title + ": " + item.cuenta + "\n";
	})

	elem.innerText=elemtex;

	if (p == true){
		text.style="animation-name:inan"
		p = false;
	}
	else{
		text.style="animation-name:anin"
		p = true;
	}


	
}





