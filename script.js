// Function that generates random pick

function computerPlay () {
  let move;
  let result = Math.random().toFixed(1);
  if (result > 0 && result <= 0.3) {
      move = "Rock";
  } else if (result > 0.3 && result <= 0.6) {
      move = "Paper";
  } else {
      move = "Scissors";
  }
  return move;
}

let computerMove = computerPlay();
console.log(computerMove);


// Function that prompt user to make their choice

function playerSelection() {
  let move = prompt("Rock, paper, or scissors? Make your move!");
  return move;
}

let playerMove = playerSelection();
console.log(playerMove);


// Function that goes through single round of the game

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