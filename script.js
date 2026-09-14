const WINNING_SCORE = 5;

let youScore = 0;
let computerScore = 0;
let gameOver = false;

const youScoreEl = document.getElementById("youScore");
const computerScoreEl = document.getElementById("computerScore");
const resultTextEl = document.getElementById("resultText");
const winnerTextEl = document.getElementById("winnerText");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

function decideWinner(player, computer) {
  if (player === computer) return "tie";
  if (player === "rock" && computer === "scissors") return "you";
  if (player === "rock" && computer === "paper") return "computer";
  if (player === "paper" && computer === "rock") return "you";
  if (player === "paper" && computer === "scissors") return "computer";
  if (player === "scissors" && computer === "paper") return "you";
  if (player === "scissors" && computer === "rock") return "computer";
}

function updateScoreboard() {
  youScoreEl.textContent = youScore;
  computerScoreEl.textContent = computerScore;
}

function checkForWinner() {
  if (youScore >= WINNING_SCORE) {
    winnerTextEl.textContent = "You win the game!";
    winnerTextEl.classList.remove("hidden");
    gameOver = true;
  } else if (computerScore >= WINNING_SCORE) {
    winnerTextEl.textContent = "Computer wins the game!";
    winnerTextEl.classList.remove("hidden");
    gameOver = true;
  }
}

function playRound(playerChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  const winner = decideWinner(playerChoice, computerChoice);

  if (winner === "you") {
    youScore = youScore + 1;
    resultTextEl.textContent = "You chose " + playerChoice + ", computer chose " + computerChoice + ". You win this round!";
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
    resultTextEl.textContent = "You chose " + playerChoice + ", computer chose " + computerChoice + ". Computer wins this round!";
  } else {
    resultTextEl.textContent = "You chose " + playerChoice + ", computer chose " + computerChoice + ". It's a tie!";
  }

  updateScoreboard();
  checkForWinner();
}

function resetGame() {
  youScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScoreboard();
  resultTextEl.textContent = "Make your move!";
  winnerTextEl.textContent = "";
  winnerTextEl.classList.add("hidden");
}

rockBtn.addEventListener("click", function () {
  playRound("rock");
});

paperBtn.addEventListener("click", function () {
  playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
  playRound("scissors");
});

resetBtn.addEventListener("click", resetGame);