// ===========================
// Player Module
// Represents a single player in Tic-Tac-Toe
// ===========================
function Player(name, pointer) {
  this.name = name; // Player name
  this.pointer = pointer; // Player symbol (❌ or ⭕)

  // Display player info in console (for debugging)
  this.showPlayerInfo = function () {
    console.log("Name:", this.name);
    console.log("Pointer:", this.pointer);
  };
}

export default Player;
