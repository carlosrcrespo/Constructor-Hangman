//CONSTRUCTOR FUNCTION FOR WORD.JS
//Instructions:
//word.js should contain all of the methods which will check the letters guessed vs the random word selected.
//Requesting Letter.js file 
var Letter = require('./letter.js');
//=====================================================================================
//First function
var Word = function(palabras){
	//Variables with an empty array.
	this.palabras = palabras;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

	//Method to grab the letter in the word.
	this.grabLetters = function(){
		for(var i = 0; i <this.palabras.length; i++){
			var theNewLetter = new Letter(this.palabras[i]);
			this.guessedWord.push(theNewLetter);

		}
	}
	this.grabLetters();
//=====================================================================================
//Second Function "method" that finds the letter in the guesses array.
	this.foundIt = function(guessLetter){
		for(var i = 0; i <this.guesses.length; i++){
			if(guessLetter == this.guesses[i]){
				return true;
			}
		}
		console.log(guessLetter);
		var added = false;

		this.guesses.push(guessLetter);
		//console.log("size:",this.guessedWord.length);
		for(var i = 0; i <this.guessedWord.length;i++){
			//console.log("i:", i);
			//console.log("guessedWord letter: ", this.guessedWord[i].theLetters)
			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}
	// this.foundIt();

//=====================================================================================
//Third Function Method that compares the letter in the secrete word with the letter input.
 	this.comparingWords = function(){
 		for(var i = 0; i < this.palabras.length; i++){
 			// console.log("secret letter:", this.palabras.charAt(i));
 			// console.log("letters:",this.guessedWord[i].current);
 			if(this.palabras.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}
 	// this.comparingWords();
//=====================================================================================
//Fourth Function it will display the letters in an emptystring.
	this.display = function(){
		var emptyString = "";
			
		for(var i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].current + " ";
		}
		return emptyString;
	}
	// this.display();
} //end of Word function


// var blue = new Word("red");
// console.log(blue.palabras);
// console.log(blue.guessedWord);
// console.log(blue.comparingWords());
// console.log(blue.display());
// console.log(blue.foundIt("h"));
// console.log(blue.display());
// console.log(blue.foundIt("r"));
// console.log(blue.display());
// console.log(blue.foundIt("e"));
// console.log(blue.foundIt("d"));
// console.log(blue.display());
// console.log(blue.comparingWords());
module.exports = Word;


