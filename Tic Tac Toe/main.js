// ===========================
// Main Game Controller
// Handles setup, user interaction, and game flow
// ===========================
import Board from "./board.js";
import Player from "./player.js";
import checkWinner from "./winner.js";
import checkDraw from "./draw.js";

// -------- DOM References --------
const cells = document.querySelectorAll(".cell");
const dialog = document.querySelector("dialog");
const winner = document.querySelector("#winner");
const closeDialog = document.querySelector("#closeDialog");
const restartPlay = document.querySelector("#playAgain");
const playerTurn = document.querySelector("#player-turns");
const form = document.querySelector("#playerForm");
const setupScreen = document.querySelector(".setup-screen");
const gameScreen = document.querySelector(".game-screen");
const startGame = document.querySelector("#startGame");
const backToSetup = document.querySelector("#backToSetup");

// -------- Player Setup --------
let player1 = new Player("Player 1", "❌");
let player2 = new Player("Player 2", "⭕");
let currentPlayer = player1;

// -------- Navigation Controls --------
backToSetup.addEventListener("click", () => {
  setupScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
});

startGame.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  setPlayers(data);
  currentPlayer = player1;

  playerTurn.innerText = `${currentPlayer.name}'s Turn`;
  setupScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

// -------- Dialog Buttons --------
closeDialog.addEventListener("click", () => {
  dialog.close();
  resetGame();
});

restartPlay.addEventListener("click", () => {
  resetGame();
  dialog.close();
});

// -------- Helper Functions --------
function resetGame() {
  Board.clearBoard();
  clearGUIBoard();
}

function clearGUIBoard() {
  cells.forEach((cell) => (cell.innerText = ""));
}

// -------- Initialize Empty Board --------
Board.showBoard();

// -------- Create Player Objects --------
function setPlayers(data) {
  const p1 = data.player1Name?.trim() || "Player 1";
  const p2 = data.player2Name?.trim() || "Player 2";
  const p1Pointer = data.player1Pointer || "❌";
  const p2Pointer = data.player2Pointer || "⭕";

  player1 = new Player(p1, p1Pointer);
  player2 = new Player(p2, p2Pointer);

  console.log("Player 1:", player1.showPlayerInfo());
  console.log("Player 2:", player2.showPlayerInfo());
}

// -------- Game Logic: Player Moves --------
cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const moveCoord = event.target.getAttribute("data-value");
    const [row, col] = moveCoord.split(" ").map(Number);
    handleMove(row, col, cell);
  });
});

function handleMove(row, col, cellRef) {
  // Prevent overwriting existing cell
  if (Board.boardCells[row][col] !== " ") return;

  // Record current player's move
  Board.boardCells[row][col] = currentPlayer.pointer;
  cellRef.innerText = currentPlayer.pointer;

  // Check for win
  if (checkWinner(currentPlayer)) {
    winner.innerText = `${currentPlayer.name} wins the game! 🎉`;
    dialog.showModal();
    return;
  }

  // Check for draw
  if (checkDraw()) {
    winner.innerText = `It's a draw 🤝`;
    dialog.showModal();
    return;
  }

  // Switch player turns
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  playerTurn.innerText = `${currentPlayer.name}'s Turn`;
}
