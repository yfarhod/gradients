var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");
var charHEX = "0123456789ABCDEF";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

var genRandomHEXColor = function() {
	let hex = "#";
	for (var i = 0; i < 6; i++) {
		hex += charHEX[Math.floor(Math.random()*16)];
	}
	return hex;
}

var changeColorValues = function() {
	color1.value = genRandomHEXColor();
	color2.value = genRandomHEXColor();
	setGradient();  
}

btn.addEventListener("click", changeColorValues);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);