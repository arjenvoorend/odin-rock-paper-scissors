let playerScore = 0;
let computerScore = 0;


// write a function that randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
  // pick a number between 1 and 3
  const randomNum = Math.floor(Math.random() * 3) + 1;

  // assign computer's random choice of "Rock", "Paper", "Scissors" to numbers 1, 2, 3
  let computerPick;
  switch (randomNum) {
    case 1:
      computerPick = "rock";
      break;
    case 2:
      computerPick = "paper";
      break;
    case 3:
      computerPick = "scissors";
      break;
  }

  // return the chosen value
  return computerPick;
}


// Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Compare player and computer picks and determine the winner
  if (playerSelection === computerSelection) {
    console.log(`It's a tie! You both chose ${playerSelection}.`)
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock.")
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You win! Rock beats Scissors.")
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You win! Paper beats Rock.")
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper.")
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors")
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You win! Scissors beats Paper.")
  }
  console.log(`player score: ${playerScore}`)
  console.log(`computer score: ${computerScore}`)
}


// Write a function that plays 5 rounds of Rock Paper Scissors and reports a winner and loser at the end
function game() {
  // Play 5 rounds of Rock Paper Scissors
  for (let i = 0; i < 5; i++) {
    const playerPrompt = window.prompt("Rock, Paper or Scissors?");
    const playerSelection = playerPrompt.toLowerCase()
    playRound(playerSelection, computerPlay())
  }

  // Announce the winner
  if (playerScore > computerScore) {
    console.log("Game over, you win!")
  } else if (playerScore < computerScore) {
    console.log("Game over, you lose!")
  } else {
    console.log("Game over, it's a tie!")
  }
}


// Play the game!
game();