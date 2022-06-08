// write a function that randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
  // pick a number between 1 and 3
  const randomNum = Math.floor(Math.random() * 3) + 1;

  // assign computer's random choice of "Rock", "Paper", "Scissors" to numbers 1, 2, 3
  let computerPick;
  switch (randomNum) {
    case 1:
      computerPick = "Rock";
      break;
    case 2:
      computerPick = "Paper";
      break;
    case 3:
      computerPick = "Scissors";
      break;
  }

  // return the chosen value
  return computerPick;
}

// Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Compare player and computer picks and determine the winner
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}.`
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock."
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors."
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock."
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper."
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors"
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats Paper."
  }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();