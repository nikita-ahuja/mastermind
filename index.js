const mastermind = require("./mastermind/mastermind");

({colorCount,
  correctPosAndColor
} = require('./mastermind/game.js'))

function runGame () {
    // mastermind['mastermind']();
    mastermind();
};

runGame();

module.exports['runGame'] = runGame;