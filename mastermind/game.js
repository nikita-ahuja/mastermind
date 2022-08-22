const generateCode = () => {
  //establish options for computer to choose from
  var options = ["R", "Y", "G", "B", "I", "V"];
  //generate a random code
  one = options[Math.floor(Math.random() * 6)];
  two = options[Math.floor(Math.random() * 6)];
  three = options[Math.floor(Math.random() * 6)];
  four = options[Math.floor(Math.random() * 6)];

  codemakerCode = [one, two, three, four];
  return codemakerCode
};

const validateGuess = (guess) => {
  //include both upper and lowercase. would using .toLowerCase method work somewhere here as opposed to hard coding?
var options = ['R', 'r', 'Y', 'y', 'G', 'g', 'B', 'b', 'I', 'i', 'V', 'v'];

  
//check if the array contains only what's provided in the options array. use every method
const containsProperOptions = guess.every(element => {
  return options.includes(element);
});  

//check if the array is a length of four and only contains options provided  
  if (guess.length == 4 && containsProperOptions) {
    return true
  } else {
    return false
  }
};

const colorCount = (guess, code) => {
  //counter
let correctColor=0;

//compare the colors of guess and code against each other
for (i=0; i<=guess.length-1; i++){
  for (j=0; j<=code.length-1; j++){
    if (guess[i] == code[j]){
      correctColor++; //if colors are the same, increment the counter
      i++;
    }
  }
}
return correctColor;
};

const correctPosAndColor = (guess, code) => {
let idxAndColor=0;
for (i=0; i<=guess.length-1; i++){
  if (guess[i] == code[i]) {
    idxAndColor++;
  }
}
  return idxAndColor;
};

const checkGuess = (guess, code) => {

var sameColor = colorCount(guess, code);
var samePositionAndColor = correctPosAndColor(guess, code);
var sameColorWrongPosition = sameColor - samePositionAndColor;
  
return guessArray = [samePositionAndColor, sameColorWrongPosition]
};

const checkWinOrLose = (guess, code, numGuesses) => {
//check if arrays are equal by compare them as strings  
const arrayEquality = () => {
	if (guess.toString() == code.toString()){
  	return true;
  } else {
  return false;
  }
};

if (arrayEquality() && numGuesses <= 8) {
  return true;
} else if (arrayEquality() && numGuesses > 8) {
  return false;
} else {
  return null;
 }
};

const getWinPercentage = (wins, plays) => {
  if (wins > 0 && plays > 0) {
   return Math.floor((wins/plays)*100);
} else {
    return 0;
  }
};

const formatGuessStats = (guessStats) => {
  let statsArray = [];
  for (i=1; i<=8; i++) {
    if (guessStats[i] == undefined){
      statsArray.push("");
    } else {
      statsArray.push('X'.repeat(guessStats[i])); //string multiplication!
    }
  };
  return statsArray;
};

module.exports = {
  generateCode,
  validateGuess,
  colorCount,
  correctPosAndColor,
  checkGuess,
  checkWinOrLose,
  getWinPercentage,
  formatGuessStats,
};