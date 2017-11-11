//CONSTRUCTOR FUNCTION FOR LETTER.JS

var Letter = function(moreletters){

	this.current = "_"
	this.theLetters = moreletters;
	//letter appears
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters; 
			return true;
		}
			return false;
	}

	this.letterShows = function(){
		return this.current;
	}
};

module.exports = Letter;