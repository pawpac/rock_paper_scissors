let playerPoint = 0;
let computerPoint = 0;
let result;
let counter = 0;

const playerDigit = document.querySelector('#playerDigit');
const computerDigit = document.querySelector('#computerDigit');
const playerSelection = document.querySelector('#playerChoice');
const computerSelection = document.querySelector('#computerChoice');
const results = document.querySelector('#result');
const btns = document.querySelector('#btns');
const restartBtn = document.querySelector('#hidden');
const buttons = document.querySelectorAll('.button');

buttons.forEach(btn => btn.addEventListener('click', () => {
  counter++;
  player = btn.textContent;
  computerChoice();
  playerSelection.textContent = player;
  computerSelection.textContent = computer;
  results.textContent = game(player, computer);
  if (game(player, computer) === "point for player") {
    playerDigit.value = parseInt(playerDigit.value) + 1;
  } else if (game(player, computer) === "point for computer") {
    computerDigit.value = parseInt(computerDigit.value) + 1;
  }
  playerDigit.textContent = playerPoint;
  computerDigit.textContent = computerPoint;
  if (counter === 5) {
    btns.style.display = 'none';
    restartBtn.style.display = 'block';
  }


point(game(player, computer));
winner(playerPoint, computerPoint);
}));

function computerChoice() {
  let result = Math.random().toFixed(1);
  if (result > 0 && result <= 0.3) {
      computer = "rock";
  } else if (result > 0.3 && result <= 0.6) {
      computer = "paper";
  } else {
      computer = "scissors";
  }
  return computer;
}

function game(player, computer) {
  if ((player === "rock") && (computer === "paper")) {
      return "point for computer";
  } else if ((player === "rock") && (computer === "scissors")) {
      return "point for player";
  } else if ((player === "paper") && (computer === "rock")) {
      return "point for player";
  } else if ((player === "paper") && (computer === "scissors")) {
      return "point for computer";
  } else if ((player === "scissors") && (computer === "rock")) {
      return "point for computer";
  } else if ((player === "scissors") && (computer === "paper")) {
      return "point for player";
  } else {
      return "tie";
  }
}

function winner(user, pc) {
    if ((counter === 5) && (user > pc)) {
        return results.textContent = "YOU WIN!";
    } else if ((counter === 5) && (user < pc)) {
        return results.textContent = "YOU LOOSE";
    } else if ((counter === 5) && (user === pc)) { 
        return results.textContent = "TIE!";
    }
}

function point(roundResult) {
    if (roundResult === "point for player") {
        return ++playerPoint;
    } else if (roundResult === "point for computer") {
        return ++computerPoint;
    }
}
