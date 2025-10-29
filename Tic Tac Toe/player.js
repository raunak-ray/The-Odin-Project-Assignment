// represents a player in the tic-tac-toe game
function Player(name, pointer) {
  this.name = name;        // player name
  this.pointer = pointer;  // symbol used by the player (X or O)

  // display player details in console
  this.showPlayerInfo = function() {
    console.log("Name:", this.name);
    console.log("Pointer:", this.pointer);
  };
}

export default Player;
