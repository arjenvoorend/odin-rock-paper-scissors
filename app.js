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