({
  generateCode,
  validateGuess,
  checkGuess,
  checkWinOrLose,
  getWinPercentage,
  formatGuessStats
} = require('./game.js'))

// These functions allow you to print a string s in the stated colors.
// Using them is NOT required
const printRed = (s) => {
  return "\x1b[31m" + s + "\x1b[0m";
};

const printYellow = (s) => {
  return "\x1b[33m" + s + "\x1b[0m";
};

const printGreen = (s) => {
  return "\x1b[32m" + s + "\x1b[0m";
};

const printBlue = (s) => {
  return "\x1b[36m" + s + "\x1b[0m";
};

const printIndigo = (s) => {
  return "\x1b[34m" + s + "\x1b[0m";
};

const printViolet = (s) => {
  return "\x1b[35m" + s + "\x1b[0m";
};

function mastermind() {

var code = generateCode();
  
while (true) {
let numGuesses = 1;
let wins = 0;
let plays = 1;

var userInput = prompt("Welcome to Mastermind! The computer has generated a code. Guess the code by entering 4 of the following letters: R, Y, G, B, I, V, NOT separated by spaces. Guess #" + numGuesses);
var guess = userInput.split("");

  //ask the user until guess is valid
    while (validateGuess(guess) == false) {
  userInput = prompt("Please enter a valid guess by entering 4 of the following letters: R, Y, G, B, I, V, NOT separated by spaces. Guess #" + numGuesses)
  var guess = userInput.split("");
  validateGuess(guess);
}
  
  for(numGuesses=2; numGuesses<=8; numGuesses++) {

    //bug: takes me to next guess even if i don't have a valid guess
    if (validateGuess(guess) == false) {
  userInput = prompt("Please enter a valid guess by entering 4 of the following letters: R, Y, G, B, I, V, NOT separated by spaces. Guess #" + numGuesses)
  var guess = userInput.split("");
  validateGuess(guess);
    }

    if (validateGuess(guess) == true) {
      colorCount(guess, code);
      correctPosAndColor(guess, code);
      console.log("FEEDBACK: # of pegs that are the correct color and in the correct position, # of pegs that are in the correct color in the incorrect position: " + checkGuess(guess, code))
      var userInput = prompt("Guess again! Guess the code by entering 4 of the following letters: R, Y, G, B, I, V, NOT separated by spaces. Guess #" + numGuesses);
    }
 
      if (checkWinOrLose(guess, code, numGuesses) == true){
        console.log("Congratulations! You guessed the correct code.");
        wins++;
        break;
      } else if ((numGuesses == 8) && (guess != code)){
        console.log("You lost");
        break;
      } else if (checkWinOrLose(guess, code, numGuesses) == null) {
        console.log("Guess again");
      }
    
    }

  //bug: wins, plays, and stats is resetting as opposed to appending
  console.log("Your win percentage " + getWinPercentage(wins,plays))
  
  guessStats = {}
  guessStats[numGuesses] = wins;
  console.log(formatGuessStats(guessStats));
  newGame = prompt("Do you want to play a new game? Please type y/n")

//end game
  if (newGame == "n"){break};
}
};

module.exports = mastermind;