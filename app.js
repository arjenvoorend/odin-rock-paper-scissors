let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let playerSelection;
let computerSelection;
let roundWinner;

const gameBtns = document.querySelector('.game-buttons');
const btns = document.querySelectorAll('button');
const newGameBtnContainer = document.querySelector('.new-game-button-container');
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
  removeShowRoundHalos(showPlayer);
  removeShowRoundHalos(showComputer);

  switch (capitalizedPlayerSelection) {
    // Handle player chooses Rock
    case ('Rock'):
      // Handle Rock wins
      if (capitalizedComputerSelection === 'Scissors' || capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} crushes ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
        // Handle Rock losses
      } else if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} covers ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} vaporizes ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
        // Handle Rock Ties
      } else if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
        showRoundTie(showComputer);
        showRoundTie(showPlayer);
      };
      break;

    // Handle player chooses Paper
    case ('Paper'):
      // Handle Paper wins
      if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} covers ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} disproves ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
        // Handle Paper losses
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} cuts ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} eats ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
        // Handle Paper Ties
      } else if (capitalizedComputerSelection === 'Paper}') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`;
        showRoundTie(showComputer);
        showRoundTie(showPlayer);
      };
      break;

    // Handle player chooses Scissors
    case ('Scissors'):
      // Handle Scissors wins
      if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} cuts ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} decapitates ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
        // Handle Scissors losses
      } else if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} crushes ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} smashes ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
        // Handle Scissors Ties
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
        showRoundTie(showComputer);
        showRoundTie(showPlayer);
      };
      break;

    // Handle player chooses Lizard
    case ('Lizard'):
      // Handle Lizard wins
      if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} eats ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} poisons ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
        // Handle Lizard losses
      } else if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} crushes ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} decapitates ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
        // Handle Lizard Ties
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
        showRoundTie(showComputer);
        showRoundTie(showPlayer);
      };
      break;

    // Handle player chooses Spock
    case ('Spock'):
      // Handle Spock wins
      if (capitalizedComputerSelection === 'Rock') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} vaporizes ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
      } else if (capitalizedComputerSelection === 'Scissors') {
        selectionResult.innerText = `You win! ${capitalizedPlayerSelection} smashes ${capitalizedComputerSelection}.`
        playerScore++;
        showRoundWinner(showPlayer);
        showRoundLoser(showComputer);
        // Handle Spock losses
      } else if (capitalizedComputerSelection === 'Lizard') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} poisons ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
      } else if (capitalizedComputerSelection === 'Paper') {
        selectionResult.innerText = `You lose! ${capitalizedComputerSelection} disproves ${capitalizedPlayerSelection}.`
        computerScore++;
        showRoundWinner(showComputer);
        showRoundLoser(showPlayer);
        // Handle Spock Ties
      } else if (capitalizedComputerSelection === 'Spock') {
        selectionResult.innerText = `It's a tie! You both chose ${capitalizedPlayerSelection}.`
        showRoundTie(showComputer);
        showRoundTie(showPlayer);
      };
      break;
  };

  renderImg('player', playerSelection);
  renderImg('computer', computerSelection);
  displayScore();
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
      selectionResult.innerText = "Game over, you win!"
    } else if (playerScore < computerScore) {
      selectionResult.innerText = "Game over, you lose!"
    } else {
      selectionResult.innerText = "Game over, it's a tie!"
    };

    // displayResults.appendChild(results)
    disableBtns();
    newGameBtnContainer.appendChild(newGameBtn);
  };
};


// Disable player choice buttons if game over
function disableBtns() {
  if (gameOver) {
    btns.forEach(button => button.disabled = true)
    btns.forEach(button => button.classList.add('button-disabled'))
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
  removeShowRoundHalos(showPlayer);
  removeShowRoundHalos(showComputer);

  enableBtns();
  newGameBtnContainer.removeChild(newGameBtn);
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


// Add green halo around winning choice
function showRoundWinner(player) {
  player.classList.add('round-winner')
};


// Add red halo around losing choice
function showRoundLoser(player) {
  player.classList.add('round-loser')
};


// Add yellow halo around tie choices
function showRoundTie(player) {
  player.classList.add('round-tie')
};


// Remove all halos for a new round
function removeShowRoundHalos(player) {
  player.classList.remove('round-winner')
  player.classList.remove('round-loser')
  player.classList.remove('round-tie')
};