//CONSTRUCTOR FUNCTION FOR GAME.JS
//Instruction:
//randomly select a word for the player.

var Word = require("./word.js");


var Game = function(){
	this.secretWords = ["bass","guitar","drums","sax","trombone","keyboard","piano"];

	this.randomWord = this.secretWords[ Math.floor(Math.random() * this.secretWords.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();
	

module.exports = Game;