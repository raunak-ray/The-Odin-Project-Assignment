import Board from "./board.js";

// check if the board is full and there are no empty cells
function checkDraw() {
  const allMoves = Board.boardCells.flat();

  // return true if no empty spaces remain
  return !allMoves.includes(" ");
}

export default checkDraw;
