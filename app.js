let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let playerSelection;

const btns = document.querySelectorAll('button');
const displayResults = document.querySelector('#display-results');
const results = document.createElement('p');


// Add event listeners for player choice
btns.forEach(button => button.addEventListener('click', () => {
  playerSelection = button.id;
  game();
}));


// Write a function that randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
  // pick a number between 1 and 3
  const randomNum = Math.floor(Math.random() * 3) + 1;

  // Assign computer's random choice of "Rock", "Paper", "Scissors" to numbers 1, 2, 3
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


// Play a single round of Rock Paper Scissors
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
  displayScore();
}


// Display user and computer score
function displayScore() {
  document.querySelector('#player-score').innerText = playerScore;
  document.querySelector('#computer-score').innerText = computerScore;
}


// Check for game over (5 games played) and announce results
function gameOver() {
  if (gamesPlayed === 5) {
    if (playerScore > computerScore) {
      results.innerText = "Game over, you win!"
    } else if (playerScore < computerScore) {
      results.innerText = "Game over, you lose!"
    } else {
      results.innerText = "Game over, it's a tie!"
    }

    displayResults.appendChild(results)
    disableBtns();
  }
}


// Disable player choice buttons if game over
function disableBtns() {
  if (gameOver) {
    btns.forEach(button => button.disabled = true)
  }
}


// Play the game!
function game() {

  playRound(playerSelection, computerPlay());
  gamesPlayed++;
  gameOver();
}


displayScore();
