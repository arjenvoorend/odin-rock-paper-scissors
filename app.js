let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let playerSelection;
let computerSelection;

const gameBtns = document.querySelector('.game-buttons');
const btns = document.querySelectorAll('button');
const newGameBtn = document.createElement('button');
newGameBtn.innerText = "New Game";
newGameBtn.addEventListener('click', newGame);

const displaySelection = document.querySelector('#display-selection');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const selectionResult = document.createElement('p');

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
    selectionResult.innerText = `It's a tie! You both chose ${playerSelection}.`
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    selectionResult.innerText = "You lose! Paper beats Rock."
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    selectionResult.innerText = "You win! Rock beats Scissors."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    selectionResult.innerText = "You win! Paper beats Rock."
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    selectionResult.innerText = "You lose! Scissors beats Paper."
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    selectionResult.innerText = "You lose! Rock beats Scissors"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    selectionResult.innerText = "You win! Scissors beats Paper."
  }

  displayScore();
  displayPicks();
}


// Display user and computer picks
function displayPicks() {
  const playerValue = capitalize(playerSelection)
  const computerValue = capitalize(computerSelection)
  playerChoice.innerText = `Your pick: ${playerValue}`
  computerChoice.innerText = `Computer pick: ${computerValue}`
  displaySelection.appendChild(playerChoice)
  displaySelection.appendChild(computerChoice);
  displaySelection.appendChild(selectionResult);
}


// Capitalize picks
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
    gameBtns.appendChild(newGameBtn);
  }
}


// Disable player choice buttons if game over
function disableBtns() {
  if (gameOver) {
    btns.forEach(button => button.disabled = true)
  }
}


// Enable player choice buttons if new game
function enableBtns() {
  if (newGame) {
    btns.forEach(button => button.disabled = false)
  }
}


// Reset all parameters for a new game
function newGame() {
  playerScore = 0;
  computerScore = 0;
  gamesPlayed = 0;

  displayScore();

  displayResults.removeChild(results);
  displaySelection.removeChild(playerChoice);
  displaySelection.removeChild(computerChoice);
  displaySelection.removeChild(selectionResult);

  enableBtns();
  gameBtns.removeChild(newGameBtn);
}


// Play the game!
function game() {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  gamesPlayed++;

  gameOver();
}


// Render initial score to the screen
displayScore();
