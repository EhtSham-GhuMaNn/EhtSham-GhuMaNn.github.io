var css = document.querySelector("h3");
var color1= document.querySelector(".color1")
var color2= document.querySelector(".color2")
var gradient = document.querySelector('.gradient')
var rando = document.querySelector(".random")

function makergb(){

	var RGBColor1 = (Math.floor(Math.random() * (255 - 1 + 1) + 1))
	var RGBColor2 = (Math.floor(Math.random() * (255 - 1 + 1) + 1))
	var RGBColor3 = (Math.floor(Math.random() * (255 - 1 + 1) + 1))
	var rgbtext = "rgb(" + RGBColor1 + ", " + RGBColor2 + ", " + RGBColor3 + ")"	
	return rgbtext
}

gradient.style.background = "linear-gradient(to right,#ff0000 ,#ffff00";

css.textContent = gradient.style.background + ";";

function backgroundset(){
	gradient.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = gradient.style.background + ";";
}
function randomColor(){
	var var1=Math.floor(Math.random()*16777215).toString(16);
	var var2=Math.floor(Math.random()*16777215).toString(16);
	gradient.style.background = 
	"linear-gradient(to right, " 
	+ makergb() + ", " 
	+ makergb() + ")";

	css.textContent = gradient.style.background + ";";
}
rando.addEventListener("click", randomColor)

color1.addEventListener("input", backgroundset)
color2.addEventListener("input", backgroundset)

