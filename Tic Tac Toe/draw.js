// ===========================
// Draw Checker
// Determines if all cells are filled with no winner
// ===========================
import Board from "./board.js";

function checkDraw() {
  const allMoves = Board.boardCells.flat(); // Flatten 2D array
  return !allMoves.includes(" "); // Return true if no empty spaces remain
}

export default checkDraw;
