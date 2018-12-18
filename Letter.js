// 
// Letter.js: 
//   Contains a constructor, Letter. This constructor should be able
//   to either display an underlying character or a blank placeholder (such as
//   an underscore), depending on whether or not the user has guessed the
//   letter. That means the constructor should define:
// 
// * A string value to store the underlying character for the letter.
// * A boolean value that stores whether that letter has been guessed yet.
// * A function that returns the underlying character if the letter has been 
//   guessed, or a placeholder (like an underscore) if the letter has not been
//   guessed.
// * A function that takes a character as an argument and checks it against the
//   underlying character, updating the stored boolean value to true if it was
//   guessed correctly.
//
//   Letter.js should not require any other files.
// 

"use strict";

class Letter {
  constructor(character) {
    this.character = character;
    this.guessed = (/^[_\W]$/.test(character)) ? true : false;
  }
  
  //  
  // A function that takes a character as an argument and checks it against the
  // underlying character, updating the stored boolean value to true if it was
  // guessed correctly.
  //
  guess(character) {
    if (character.toUpperCase() === this.character.toUpperCase()) {
      this.guessed = true;
      return this.guessed;
    }
    
    return false;
  }
  
  get letterGuessed() {
    return this.guessed;
  }
}

//
// A function that returns the underlying character if the letter has been 
// guessed, or a placeholder (like an underscore) if the letter has not been
// guessed.
//
Letter.prototype.toString = function() {
  return (this.guessed) ? this.character : '_';
}

module.exports = Letter;
