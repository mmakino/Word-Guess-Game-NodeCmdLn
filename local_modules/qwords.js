/*
-----------------------------------------------------------
Read a list of word(s) from the input file and export
the list as QWords array.
-----------------------------------------------------------
*/

const fs = require('fs');

function questionWords(questionFile) {
  console.log(questionFile);
  const content = fs.readFileSync(questionFile, 'utf8');
  const words = content.split("\n");
  words.pop();
  
  return words;
}

module.exports = questionWords;