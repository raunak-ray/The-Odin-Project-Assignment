// represents the tic-tac-toe game board and related operations
const Board = {
  // initialize a 3x3 grid with empty spaces
  boardCells: new Array(3).fill().map(() => Array(3).fill(" ")),

  // display the current board state in console
  showBoard() {
    console.log(`${this.boardCells[0][0]} | ${this.boardCells[0][1]} | ${this.boardCells[0][2]}`);
    console.log(`${this.boardCells[1][0]} | ${this.boardCells[1][1]} | ${this.boardCells[1][2]}`);
    console.log(`${this.boardCells[2][0]} | ${this.boardCells[2][1]} | ${this.boardCells[2][2]}`);
  }
};

export default Board;
