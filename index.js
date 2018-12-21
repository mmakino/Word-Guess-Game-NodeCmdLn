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
const Word = require("./local_modules/Word");
const QWords = require("./local_modules/qwords");

let questionFile = ("./etc/90s_movies.txt");
const questionWords = QWords(questionFile);

const MAX_GUESS = 10;            // The initial number of guesses
let remainingGuess = MAX_GUESS;  // The remaining number of guesses
const word = new Word();         // Word constructor object


word.letters = selectWords();
askUser();

//
// Select a movie title from the Q90sMovies array
//
function selectWords() {
  const index = Math.floor(Math.random() * questionWords.length);
  return questionWords[index];
}

//
// Prompt a user to enter a letter
//
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
      remainingGuess = MAX_GUESS;
      word.letters = selectWords();
    }
    
    if (remainingGuess > 0) {
      askUser();
    }
    else {
      console.log(`Game Over! The movie was "${word.answer()}"`);
    }
  });
}