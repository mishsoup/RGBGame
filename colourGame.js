var numOfSquares = 6;
var colours = generateRandomColours(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById('colourDisplay');
var messageDisplay = document.getElementById("message");
var h1Background = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function(){
	colours = generateRandomColours(numOfSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	h1Background.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";


	for (var i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];
	
	}
});

easyButton.addEventListener("click", function(){
	numOfSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colours = generateRandomColours(numOfSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	h1Background.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

	if (i > 2) {
		squares[i].style.display = "none";

	}
	
	}

});

hardButton.addEventListener("click", function(){
	numOfSquares = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colours = generateRandomColours(numOfSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	h1Background.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

	if (i > 2) {
		squares[i].style.display = "block";

		}
	}

});


colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab colour of clicked square
		var clickedColour = this.style.backgroundColor; 
		//compare colour to pickedColour

		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!!";
			changeColors(clickedColour);
			h1Background.style.backgroundColor = pickedColour;
			resetButton.textContent = "Play Again?";


		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again.";
		}
	});
}

function changeColors(colour) {
	// loop through all squares
	// change each colour to match given colour

	for (var i = 0; i < squares.length ; i++) {
		squares[i].style.background = colour;
	}
}

function pickColour() {

	var random = Math.floor(Math.random() * colours.length);
	return colours[random];

}

function generateRandomColours(num) {
	// make an array
	// add num random colours to array
	// return that array

	var arr = [];

	//get random colour and push into array
	for (var i = 0; i < num ; i ++) {
		arr[i] = randomColour();
	}

	return arr;

}

function randomColour() {
	var red = Math.floor(Math.random() * 256).toString();
	var green = Math.floor(Math.random() * 256).toString();
	var blue = Math.floor(Math.random() * 256).toString();

	var randoColour = "rgb(" + red + ", " + green + ", " + blue + ")"
	//rgb(0, 0, 0)

	return randoColour;
}

