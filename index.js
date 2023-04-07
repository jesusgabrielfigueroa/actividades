const text = document.getElementById("text");
const btn = document.getElementById("btn");
const elem = document.getElementById("elem");
const c = document.getElementById("c");
const ad = document.getElementById("+");
var questions = "";
var actividades = [];
btn.addEventListener("click", re);
c.addEventListener("click", borrar);
ad.addEventListener("click", add);
var p = true;
var elemtex = "";
text.innerText = "click";


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

function add(){
	elemtex = "";
	var con ={ title: prompt("diga una actividad"), cuenta: 0}
	if(con.title == null || con.title == ""){
		alert("no ingreso nada");
	}
	else{
		actividades.push(con);
		con = ""
		actividades.forEach(function(item, index){
		elemtex += item.title + ": " + item.cuenta + "\n";
		})
		elem.innerText=elemtex;
		elemtex = "";
	}

}



function borrar(){
	actividades = [];
	text.innerText="click";
	elem.innerText="";
}






