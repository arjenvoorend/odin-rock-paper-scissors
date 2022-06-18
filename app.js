let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let playerSelection;
let computerSelection;
let roundWinner;

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

const showPlayer = document.querySelector('#show-player');
const showComputer = document.querySelector('#show-computer');
const showGameIntro = document.querySelector('#show-game-intro');

// Add event listeners for player choice
btns.forEach(button => button.addEventListener('click', () => {
  playerSelection = button.id;
  game();
}));


// Write a function that randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
  // pick a number between 1 and 3
  const randomNum = Math.floor(Math.random() * 5) + 1;

  // Assign computer's random choice of "Rock", "Paper", "Scissors", "Lizard", "Spock" to numbers 1, 2, 3,4,5
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
    case 4:
      computerPick = "lizard";
      break;
    case 5:
      computerPick = 'spock';
      break;
  };

  // return the chosen value
  return computerPick;
};


// Play a single round of Rock, Paper, Scissors, Lizard, Spock
function playRound(playerSelection, computerSelection) {
  let capitalizedPlayerSelection = capitalize(playerSelection);
  let capitalizedComputerSelection = capitalize(computerSelection);

  removeImg(showPlayer);
  removeImg(showComputer);

  switch (capitalizedPlayerSelection) {
    // Handle player chooses Rock
    case ('Rock'):
      // Handle Rock wins
      if (capitalizedComputerSelection === 'Scissors' || capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} crushes ${capitalizedComputerSelection}.`
        playerScore++;
        // Handle Rock losses
      } else if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} covers ${capitalizedPlayerSelection}.`
        computerScore++;
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} vaporizes ${capitalizedPlayerSelection}.`
        computerScore++;
        // Handle Rock Ties
      } else if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
      };
      break;

    // Handle player chooses Paper
    case ('Paper'):
      // Handle Paper wins
      if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} covers ${capitalizedComputerSelection}.`
        playerScore++;
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} disproves ${capitalizedComputerSelection}.`
        playerScore++;
        // Handle Paper losses
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} cuts ${capitalizedPlayerSelection}.`
        computerScore++;
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} eats ${capitalizedPlayerSelection}.`
        computerScore++;
        // Handle Paper Ties
      } else if (capitalizedComputerSelection === 'Paper}') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
      };
      break;

    // Handle player chooses Scissors
    case ('Scissors'):
      // Handle Scissors wins
      if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} cuts ${capitalizedComputerSelection}.`
        playerScore++;
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} decapitates ${capitalizedComputerSelection}.`
        playerScore++;
        // Handle Scissors losses
      } else if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} crushes ${capitalizedPlayerSelection}.`
        computerScore++;
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} smashes ${capitalizedPlayerSelection}.`
        computerScore++;
        // Handle Scissors Ties
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
      };
      break;

    // Handle player chooses Lizard
    case ('Lizard'):
      // Handle Lizard wins
      if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} eats ${capitalizedComputerSelection}.`
        playerScore++;
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} poisons ${capitalizedComputerSelection}.`
        playerScore++;
        // Handle Lizard losses
      } else if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} crushes ${capitalizedPlayerSelection}.`
        computerScore++;
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} decapitates ${capitalizedPlayerSelection}.`
        computerScore++;
        // Handle Lizard Ties
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
      };
      break;

    // Handle player chooses Spock
    case ('Spock'):
      // Handle Spock wins
      if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} vaporizes ${capitalizedComputerSelection}.`
        playerScore++;
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} smashes ${capitalizedComputerSelection}.`
        playerScore++;
        // Handle Spock losses
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} poisons ${capitalizedPlayerSelection}.`
        computerScore++;
      } else if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} disproves ${capitalizedPlayerSelection}.`
        computerScore++;
        // Handle Spock Ties
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
      };
      break;
  };

  renderImg('player', playerSelection);
  renderImg('computer', computerSelection);
  displayScore();
  displayPicks();
};


// Display user and computer picks
function displayPicks() {
  let playerValue = capitalize(playerSelection)
  let computerValue = capitalize(computerSelection)
  playerChoice.innerText = `Your pick: ${playerValue}`
  computerChoice.innerText = `Computer pick: ${computerValue}`
  displaySelection.appendChild(playerChoice)
  displaySelection.appendChild(computerChoice);
  displaySelection.appendChild(selectionResult);
};


// Capitalize picks
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


// Display user and computer score
function displayScore() {
  document.querySelector('#player-score').innerText = playerScore;
  document.querySelector('#computer-score').innerText = computerScore;
};


// Check for game over (5 games played) and announce results
function gameOver() {
  if (gamesPlayed === 5) {
    if (playerScore > computerScore) {
      results.innerText = "Game over, you win!"
    } else if (playerScore < computerScore) {
      results.innerText = "Game over, you lose!"
    } else {
      results.innerText = "Game over, it's a tie!"
    };

    displayResults.appendChild(results)
    disableBtns();
    gameBtns.appendChild(newGameBtn);
  };
};


// Disable player choice buttons if game over
function disableBtns() {
  if (gameOver) {
    btns.forEach(button => button.disabled = true)
  };
};


// Enable player choice buttons if new game
function enableBtns() {
  if (newGame) {
    btns.forEach(button => button.disabled = false)
  };
};


// Reset all parameters for a new game
function newGame() {
  playerScore = 0;
  computerScore = 0;
  gamesPlayed = 0;

  displayScore();
  removeImg(showPlayer);
  removeImg(showComputer);

  displayResults.removeChild(results);
  displaySelection.removeChild(playerChoice);
  displaySelection.removeChild(computerChoice);
  displaySelection.removeChild(selectionResult);

  enableBtns();
  gameBtns.removeChild(newGameBtn);
};


// Play the game!
function game() {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  gamesPlayed++;

  gameOver();
};


// Render initial score to the screen
displayScore();


// Render img to the screen
function renderImg(player, selection) {
  let selected = capitalize(selection);
  let elem = document.createElement('img');
  elem.setAttribute('src', `IMG/${selected}.svg`);
  elem.classList.add('showing');
  document.querySelector(`#show-${player}`).appendChild(elem);
};


// Removes rendered img
function removeImg(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

