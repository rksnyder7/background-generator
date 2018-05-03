var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector('button');



function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";"
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomRGB() {
	return Math.round(Math.random()*255);
}



setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

console.log("rgb(" + Math.round(Math.random()*255) + "," + Math.random()*255+ "," + Math.random()*255+ ")");

button.addEventListener("click", function(){
	color1.value =  rgbToHex(randomRGB(),randomRGB(),randomRGB());
	color2.value =  rgbToHex(randomRGB(),randomRGB(),randomRGB());
	setGradient();
})