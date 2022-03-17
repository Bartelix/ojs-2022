class RockPaperScissors {
  constructor() {
    this.p1Wins = 0;
    this.p2Wins = 0;
  }

  move(decisionP1, decisionP2) {
    if (decisionP1 === decisionP2) {
      console.log(`DRAW - ${decisionP1} & ${decisionP2}!\n`);
      return;
    }

    const p1Won = this.checkWinningPair(decisionP1, decisionP2);
    if (p1Won) {
      console.log(`P1 wins - ${decisionP1} beats ${decisionP2}!`);
      this.p1Wins++;
    } else {
      console.log(`P2 wins - ${decisionP2} beats ${decisionP1}!`);
      this.p2Wins++;
    }

    console.log(`Current score - P1: ${this.p1Wins} P2: ${this.p2Wins}\n`);
  }

  checkWinningPair(d1, d2) {
    const winningMoves = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };
    return winningMoves[d1] === d2;
  }

  save() {
    return JSON.stringify(this);
  }

  load(state) {
    try {
      const { p1Wins, p2Wins } = JSON.parse(state);
      if (typeof p1Wins !== "number" || typeof p2Wins !== "number") {
        throw Error(
          "State must have p1Wins and p2Wins properties of type number"
        );
      }

      this.p1Wins = p1Wins;
      this.p2Wins = p2Wins;
    } catch (err) {
      if (err.name === "SyntaxError") {
        throw Error("State must be an string object");
      }
      throw Error(err.message);
    }
  }
}

module.exports = RockPaperScissors;
