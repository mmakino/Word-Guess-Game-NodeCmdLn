//
// Word.js: 
//   Contains a constructor, Word that depends on the Letter constructor.
//   This is used to create an object representing the current word the 
//   user is attempting to guess. That means the constructor should define:
//
//   * An array of new Letter objects representing the letters of the 
//     underlying word.
//   * A function that returns a string representing the word. This should
//     call the function on each letter object (the first function defined
//     in Letter.js) that displays the character or an underscore and
//     concatenate those together.
//   * A function that takes a character as an argument and calls the guess 
//     function on each letter object (the second function defined in Letter.js)
//
//   Word.js should only require Letter.js
//

"use strict";

const Letter = require("./Letter");

class Word {
  constructor(word = "") {
    this.word = (word.length > 0) ? this.letters(word) : [];
  }
  
  //
  // Setter function for initializing word(s)
  //
  set letters(word) {
    this.word = word.split("").map(character => {
      return new Letter(character);
    }); 
  }
  
  //
  // Getter function for the word
  //
  get letters() {
    // console.log(this.word);
    return this.word.join(" ");
  }
  
  //
  // Check whether the _character_ is included or not
  //
  guess(character) {
    const guessIsRight = this.word.some(letter => { 
      return letter.guess(character);
    });
    
    if (guessIsRight) {
      this.word.forEach(letter => {
        letter.guess(character);
      });
    }
    
    return guessIsRight;
  }
  
  //
  // Check whether all the letters have been gussed or not
  //
  allGussed() {
    return this.word.every(function(letter) {
      return letter.letterGuessed;
    });
  }
  
  //
  // The original word string
  //
  answer() {
    return this.word.map(letter => letter.character).join("");
  }
}

module.exports = Word;
