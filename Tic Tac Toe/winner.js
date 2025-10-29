import Board from "./board.js";

// check if the given player has won the game
function checkWinner(player) {
  const currentBoardCells = Board.boardCells;

  // check rows and columns
  for (let i = 0; i < 3; i++) {
    let isRowWinner = true;
    let isColumnWinner = true;

    for (let j = 0; j < 3; j++) {
      // check all cells in a row
      if (currentBoardCells[i][j] !== player.pointer) {
        isRowWinner = false;
      }
      // check all cells in a column
      if (currentBoardCells[j][i] !== player.pointer) {
        isColumnWinner = false;
      }
    }

    // return true if any row or column has all same pointers
    if (isRowWinner || isColumnWinner) {
      return true;
    }
  }

  // check left diagonal
  if (
    currentBoardCells[0][0] === player.pointer &&
    currentBoardCells[1][1] === player.pointer &&
    currentBoardCells[2][2] === player.pointer
  ) {
    return true;
  }

  // check right diagonal
  if (
    currentBoardCells[0][2] === player.pointer &&
    currentBoardCells[1][1] === player.pointer &&
    currentBoardCells[2][0] === player.pointer
  ) {
    return true;
  }

  // no winning condition met
  return false;
}

export default checkWinner;
