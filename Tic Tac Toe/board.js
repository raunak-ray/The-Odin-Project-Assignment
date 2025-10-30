// ===========================
// Board Module
// Handles board state and display logic
// ===========================
const Board = {
  // Create an empty 3x3 grid
  boardCells: Array.from({ length: 3 }, () => Array(3).fill(" ")),

  // Print current board state to console
  showBoard() {
    console.log(`${this.boardCells[0][0]} | ${this.boardCells[0][1]} | ${this.boardCells[0][2]}`);
    console.log(`${this.boardCells[1][0]} | ${this.boardCells[1][1]} | ${this.boardCells[1][2]}`);
    console.log(`${this.boardCells[2][0]} | ${this.boardCells[2][1]} | ${this.boardCells[2][2]}`);
  },

  // Reset board to initial empty state
  clearBoard() {
    this.boardCells = Array.from({ length: 3 }, () => Array(3).fill(" "));
    this.showBoard();
  },
};

export default Board;
