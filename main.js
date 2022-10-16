/* main.js for a simple Rock, Paper, Scissors game in the console. */

/* Declare variables and set Win counters to 0*/
let computerChoice;
let playerChoice; 
let computerWin = 0;
let playerWin = 0;
let ties = 0;
let errors = 0;
const playerScoreboard = document.querySelector('.playercount');
const computerScoreBoard = document.querySelector('.computercount');
const gameResult = document.querySelector('.result');

/* Function that has the computer randomly choose rock, paper, or scissor. */
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "ROCK";
            break;
        case 1:
            computerChoice = "PAPER";
            break;
        case 2:
            computerChoice = "SCISSORS";
            break;
    }
/* Put everything in upper case so that it can be compared with the player's choice */
    computerChoice = computerChoice.toUpperCase(); 
    return computerChoice;
} 

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playerChoice = "ROCK";
    playRound(playerChoice, computerChoice);
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playerChoice = "PAPER";
    playRound(playerChoice, computerChoice);
});
    

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playerChoice = "SCISSORS";
    playRound(playerChoice, computerChoice);
    
});

/* Plays a round of rock, paper, scissors and declares the winner */
function playRound() {

    if (computerChoice == playerChoice) {
        ties++;
        gameResult.textContent = "It's a tie!"
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        computerWin++;
        computerScoreBoard.textContent = computerWin;
        gameResult.textContent = "The computer chose rock you chose scissors. Computer Wins!";
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        computerWin++;
        computerScoreBoard.textContent = computerWin;
        gameResult.textContent = "The computer chose scissors you chose paper. Computer Wins!";
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        computerWin++;
        computerScoreBoard.textContent = computerWin;
        gameResult.textContent = "The computer chose paper you chose rock. Computer Wins!";
    } else if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
        playerWin++;
        playerScoreboard.textContent = playerWin;
        gameResult.textContent = "The computer chose scissors you chose rock. You Win!";
    } else if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
        playerWin++;
        playerScoreboard.textContent = playerWin;
        gameResult.textContent = "The computer chose paper you chose scissors. You Win!";
    } else if (computerChoice == "ROCK" && playerChoice == "PAPER") {
        playerWin++;
        playerScoreboard.textContent = playerWin;
        gameResult.textContent = "The computer chose rock you chose paper. You Win!";
    } else { gameResult.textContent = 'Somthing went wrong';
        errors++;
    }

    if (computerWin == 5) {
        alert("Computer wins the Game! Game Over!");
        reset();
    } else if (playerWin == 5) {
        alert("You won!");
        reset();
    }
}

function reset() {
    computerWin = 0;
    computerScoreBoard.textContent = computerWin;
    playerWin = 0;
    playerScoreboard.textContent = playerWin;
    gameResult.textContent = "Press a button to start the game";

}





