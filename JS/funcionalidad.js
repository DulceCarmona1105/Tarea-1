function cambiarfondo() {
	var f = document.getElementById("colores").value;
	var body = document.getElementById("body")
	var input = document.getElementsByClassName("input")
	body.style.backgroundColor = f
	input.style.backgroundColor = f

}
document.getElementById("btn").addEventListener("click", function(){
var input = document.createElement("input");
console.log(input);
input.setAttribute("class","input");
input.setAttribute("type","text");
input.setAttribute("placeholder","X");
input.setAttribute("onchange", "cambiarfondo(this)");
document.getElementById("form").appendChild(input);
})
function selector(){
	return document.querySelector(selector);
}

function cambiarfondo() {
	var f = document.getElementById("colores").value;
	var body = document.getElementById("body")
	body.style.backgroundColor = f
}

function datos()
{
	var p1 = document.getElementById("pr1").textContent;
	var r1 = document.getElementById("r1").value;
	var p2 = document.getElementById("pr2").textContent;
	var r2 = document.getElementById("r2").value;
	var p3 = document.getElementById("pr3").textContent;
	var r3 = document.getElementById("r3").value;
	var p4 = document.getElementById("pr4").textContent;
	var r4 = document.getElementById("r4").value;
	var p5 = document.getElementById("pr5").textContent;
	var r5 = document.getElementById("r5").value;
	var todo = p1+" - "+r1+"<br> "+p2+" - "+r2+"<br> "+p3+" - "+r3+"<br> "+p4+" - "+r4+"<br> "+p5+" - "+r5+"<br> ";
	document.getElementById("respuestas").innerHTML = todo;
}



