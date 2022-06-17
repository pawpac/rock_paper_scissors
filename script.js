// Function that generates random pick

function computerPlay () {
  let move;
  let result = Math.random().toFixed(1);
  if (result > 0 && result <= 0.3) {
      move = "rock";
  } else if (result > 0.3 && result <= 0.6) {
      move = "paper";
  } else {
      move = "scissors";
  }
  return move;
}


// Function that prompt user to make their choice

function playerSelection() {
  let move = prompt("Rock, paper, or scissors? Make your move!");
  return move.toLowerCase();
}

// Five iterations of singleRound functions with playerSelection and computerPlay parameters

function game() {
let player = 0;
let computer = 0;
for (let i = 0; i < 5; i++) {
    function singleRound(playerMove, computerMove) {
        if (playerMove === "rock" && computerMove === "paper") {
            return "computer";
        } else if (playerMove === "rock" && computerMove === "scissors") {
            return "player";
        } else if (playerMove === "paper" && computerMove === "rock") {
            return "player";
        } else if (playerMove === "paper" && computerMove === "scissors") {
            return "computer";
        } else if (playerMove === "scissors" && computerMove === "rock") {
            return "computer";
        } else if (playerMove === "scissors" && computerMove === "paper") {
            return "player";
        } else {
            return "tie";
        }
      }

      roundResult = singleRound(playerSelection(), computerPlay());

    if (roundResult === "player") {
        ++player;
        alert("player: " + player + " computer: " + computer);
    } else if (roundResult === "computer") {
        ++computer;
        alert("player: " + player + " computer: " + computer);
    } else { alert("Tie! player: " + player + " computer: " + computer);
    }
}
}
