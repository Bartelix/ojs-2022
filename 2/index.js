const gameConstructor = require("./game");
const game = new gameConstructor();

game.move("rock", "paper");
game.move("scissors", "scissors");
game.move("paper", "scissors");
game.move("paper", "rock");

const storedGame = game.save();
game.load(storedGame);

game.move("paper", "scissors");
