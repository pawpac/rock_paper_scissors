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