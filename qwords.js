/*
-----------------------------------------------------------
Read a list of word(s) from the input file and export
the list as QWords array.
-----------------------------------------------------------
*/

const questionFile = "./90s_movies.txt";
const fs = require('fs');

console.log(questionFile);

const content = fs.readFileSync(questionFile, 'utf8');
const words = content.split("\n");
words.pop();

let QWords = words;
module.exports = QWords;