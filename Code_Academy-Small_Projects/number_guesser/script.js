let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random()*9);
}

function compareGuesses(human, computer, target) {
  const diffhum = Math.abs(human - target);
  const diffcom = Math.abs(computer -target);

  if (diffcom < diffhum) {
    return false; //computer wins
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
} 

function advanceRound() {
  currentRoundNumber++;
}


