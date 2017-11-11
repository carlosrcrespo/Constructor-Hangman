//CONSTRUCTOR FUNCTION
//Instruction:
//index.js is the starting app. Running it in Terminal/Bash will start the game.

var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); 
	letTheGameBegin(userGuess);
//=====================================================================================
		function letTheGameBegin(guesses){
			console.log("H A N G  M A N");
			console.log("Musical Instrument Edition");
			console.log(" ");
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win");
				return;
			}
			//if the user is out of gusses!
			if(guesses <= 0){
				console.log("Game Over!");
				return;
			}

		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guesses --;
		}
		letTheGameBegin(guesses);

	});
}





