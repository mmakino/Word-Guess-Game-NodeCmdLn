//
// index.js: 
//   The file containing the logic for the course of the game, 
//   which depends on Word.js and:
//
//   * Randomly selects a word and uses the Word constructor to store it.
//   * Prompts the user for each guess and keeps track of the user's
//     remaining guesses.
//

"use strict";

const prompt = require("prompt");
const colors = require("colors/safe");
const Word = require("./Word");

const QWords = [
  "Jurassic Park",
  "Forrest Gump",
  "The Shawshank Redemption",
  "What's Eating Gilbert Grape",
  "Good Will Hunting",
  "Pulp Fiction",
  "Reservoir Dogs",
  "The Usual Suspects",
  "Toy Story",
  "Seven",
  "Ground Hog Day",
  "Fargo",
  "Unforgiven",
  "American Beauty",
  "L.A. Confidential"
]

let remainingGuess = 10;
let word = new Word();

word.letters = selectWord();
askUser();

function selectWord(index = Math.floor(Math.random() * QWords.length)) {
  return QWords[index];
}

function askUser() {
  prompt.message = colors.white(`\n${word.letters}\n`);
  prompt.delimiter = colors.green("");

  prompt.start();

  prompt.get({
    properties: {
      letter: {
        description: colors.yellow(`\nGuess a letter: `)
      }
    }
  }, function (err, input) {
    if (word.guess(input.letter)) {
      console.log(colors.cyan("CORRECT!\n"));
    } else {
      remainingGuess -= 1;
      console.log(colors.red("Sorry, wrong!\n"));
      console.log(colors.magenta("Remaining guess: " + remainingGuess));
    }
    // console.log(word);

    if (word.allGussed()) {
      console.log(colors.cyan("\nYou got it all correct! A next word"));
      remainingGuess = 10;
      word.letters = selectWord();
    }
    
    if (remainingGuess > 0) {
      askUser();
    }
    else {
      console.log(`Game Over! The movie was "${word.answer()}"`);
    }
  });
}