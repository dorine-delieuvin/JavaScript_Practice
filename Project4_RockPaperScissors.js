/*
Rock, Paper, Scissors

Programme playing Rock, Paper, Scissors with the user
using JavaScript - Codecademy Project

Game code is broken down into four parts:
1. Get user’s choice.
2. Get computer’s choice.
3. Compare two choices and determine the winner.
4. Start the program and display the results 
*/

// user's choice
let playerInput = "rock"; // try 'Rock', 'paper', '   Scissors', 'pluto'.

// function to process Player's choice
function processPlayer(playerInput) {
  let playerChoice = playerInput.toLowerCase().trim();
  if (playerChoice != "rock" && "paper" && "scissors") {
    console.log('Accepting only: "rock", "paper", "scissors".');
  }
  return playerChoice;
}

// computer's choice, randomly generate an interger between 1 and 3, switched to the corresponding play: rock, paper or scissors
function generateComputer() {
  let computerChoice;
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

// comparing choices, determining result
function compareChoices(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    console.log(
      `Player played ${playerChoice}, Computer played ${computerChoice}, it's a draw.`
    );
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    console.log(
      `Player played ${playerChoice}, Computer played ${computerChoice}, Computer wins.`
    );
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(
      `Player played ${playerChoice}, Computer played ${computerChoice}, Player wins.`
    );
  }
}

// starting the programme, displaying the result
compareChoices(processPlayer(playerInput), generateComputer());
