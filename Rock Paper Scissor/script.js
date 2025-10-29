const possibleMoves = document.querySelector(".possibleMoves");
const move = document.querySelector("#move");
const winner = document.querySelector("#winner");
const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
let yourCurrentScore = 0;
let computerCurrentScore = 0;

const playRound = () => {
  possibleMoves.addEventListener(
    "click",
    (e) => {
      const card = e.target.closest(".card");

      if (!card) return;
      const playerMove = card.getAttribute("data-move").toLowerCase();
      const computerMove = getComputerMove().toLowerCase();
      console.log(playerMove, computerMove);
      checkWinner(playerMove, computerMove);
      if (yourCurrentScore === 5 || computerCurrentScore === 5) {
        endGame();
      } else {
        // allow next round
        playRound();
      }
    },
    { once: true }
  );
};
function getComputerMove() {
  const moves = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function checkWinner(playerMove, computerMove) {
  if (playerMove == computerMove) {
    move.textContent = `You choose ${playerMove} || Computer choose ${computerMove}`;
    winner.textContent = "🥲Alas!! It's a draw";
  } else if (
    (playerMove == "rock" && computerMove == "scissor") ||
    (playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "scissor" && computerMove == "paper")
  ) {
    move.textContent = `You choose ${playerMove} || Computer choose ${computerMove}`;
    winner.textContent = "🎉Congrats!! You Won!";
    yourCurrentScore += 1;
    yourScore.textContent = yourCurrentScore;
  } else {
    move.textContent = `You choose ${playerMove} || Computer choose ${computerMove}`;
    winner.textContent = "🥲Shit!! You lost!";
    computerCurrentScore += 1;
    computerScore.textContent = computerCurrentScore;
  }
}

// while (yourCurrentScore <= 5 || computerCurrentScore <= 5) {
//     setInterval(() => {
//         playRound()
//     }, 1500);
// }
// if (yourCurrentScore == 5) {
//     window.alert("You Won")
// }
// else {
//     window.alert("You lost")
// }

function endGame() {
  if (yourCurrentScore === 5) {
    alert("🎉 You Won the Game!");
  } else {
    alert("💀 You Lost the Game!");
  }
  // reset game (optional)
  yourCurrentScore = 0;
  computerCurrentScore = 0;
  yourScore.textContent = yourCurrentScore;
  computerScore.textContent = computerCurrentScore;

  // start again if you want
  playRound();
}

// start the first round
playRound();
