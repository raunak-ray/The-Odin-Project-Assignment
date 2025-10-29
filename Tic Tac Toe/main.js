import Board from "./board.js";
import Player from "./player.js";
import checkWinner from "./winner.js";
import checkDraw from "./draw.js";

// show initial empty board
console.log(Board.boardCells);
Board.showBoard();

// create players
const player1 = new Player("Raunak", "X");
const player2 = new Player("Rimuru", "O");
player1.showPlayerInfo();

// track whose turn it is
let currentPlayer = player1;

// handle a single player move
function playerMove(moveIndex) {
  const [row, col] = moveIndex.map(Number);
  console.log(row, col);

  // prevent overwriting an already filled cell
  if (Board.boardCells[row][col] !== " ") {
    console.log("Cell already taken");
    return false;
  }

  // update board with current player's move
  Board.boardCells[row][col] = currentPlayer.pointer;
  Board.showBoard();

  // check winner
  if (checkWinner(currentPlayer)) {
    console.log(currentPlayer.name, "wins the game");
    return true; // stop the game
  }

  // check draw
  if (checkDraw()) {
    console.log("It's a draw");
    return true; // stop the game
  }

  // switch turn between players
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  return false; // game continues
}

// main game loop with user prompts
// keeps running until someone wins or the game draws
for (let i = 0; i < 9; i++) {
  const moveCoordinate = window.prompt(`${currentPlayer.name}'s move (row col):`);
  if (!moveCoordinate) break; // stop if user cancels prompt

  const moveArray = moveCoordinate.split(" ").map(Number);
  const gameEnded = playerMove(moveArray);

  if (gameEnded) break; // exit loop if winner or draw
}
