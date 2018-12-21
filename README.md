# Word-Guess-NodeJS
A Word Guess command-line game using javascript constructor functions

### Description

This is a word guess game on a command line based on Node.js. The implementation is using javascript constructor functions as well as the constructor functions are written in separate files as modules in order to organize the code in a more moduler manner.

### Files
```
index.js            -- The main javascript file 
package.json        -- npm package file
local_modules
├── Letter.js       -- A module for individual character
├── Word.js         -- A module for a word to guess
└── qwords.js       -- A module to read in an input words file
etc/
└── 90s_movies.txt  -- A text file containing question words
```

### How To Play

In the application top directory, call node.js with the main javascript "index.js" as a command-line argument.

For example,
```
$ node index.js
```

#### 90s Movie Themed Word Guess !!

It will display the first movie to guess as followings.
```
./etc/90s_movies.txt

_ _ _   _ _ _ _ _

Guess a letter:
```
As show in the very first line, the default movie names are stored in the file ./etc/90s_movies.txt. Pleas try guessing movie names from 1990s. **Type one letter and press Enter key**.

To quit, **Ctrl-D** at any time.

