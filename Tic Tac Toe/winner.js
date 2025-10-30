// ===========================
// Winner Checker Module
// Checks whether the current player has won the game
// ===========================

import Board from "./board.js";

function checkWinner(player) {
  const board = Board.boardCells;
  const mark = player.pointer; // Current player's symbol (❌ or ⭕)

  // ----- Check Rows & Columns -----
  for (let i = 0; i < 3; i++) {
    let rowWin = true;
    let colWin = true;

    for (let j = 0; j < 3; j++) {
      // Check each row cell
      if (board[i][j] !== mark) rowWin = false;

      // Check each column cell
      if (board[j][i] !== mark) colWin = false;
    }

    // Return early if player wins by row or column
    if (rowWin || colWin) return true;
  }

  // ----- Check Diagonals -----
  const leftDiagWin =
    board[0][0] === mark && board[1][1] === mark && board[2][2] === mark;

  const rightDiagWin =
    board[0][2] === mark && board[1][1] === mark && board[2][0] === mark;

  if (leftDiagWin || rightDiagWin) return true;

  // ----- No Win Found -----
  return false;
}

export default checkWinner;
