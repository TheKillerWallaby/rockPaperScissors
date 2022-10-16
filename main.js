/* main.js for a simple Rock, Paper, Scissors game in the console. */

/* Declare variables and set Win counters to 0*/
let computerChoice;
let playerChoice; 
let computerWin = 0;
let playerWin = 0;
let ties = 0;
let errors = 0;

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
    console.log(playerChoice);
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playerChoice = "PAPER";
    console.log(playerChoice);
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
});
    

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playerChoice = "SCISSORS";
    console.log(playerChoice);
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
    
});

/* Get the player's choice and put in upper case */
// function playerSelectionRock() {
//     // playerChoice = prompt("What's your choice rock, paper, or scissors?");
//     // playerChoice = (playerChoice.toUpperCase());
//     playerChoice == 'ROCK';
//     return playerChoice;
// }

/* Plays a round of rock, paper, scissors and declares the winner */
function playRound() {
   const playerScoreboard = document.querySelector('.playercount');
   const computerScoreBoard = document.querySelector('.computercount');
    if (computerChoice == playerChoice) {
        console.log("Its a tie!");
        ties++;
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        computerWin++;
        computerScoreBoard.textContent = computerWin;
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        computerWin++;
        computerScoreBoard.textContent = computerWin;
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        computerWin++;
        computerScoreBoard.textContent = computerWin;
    } else if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
        playerWin++;
        playerScoreboard.textContent = playerWin;
    } else if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
        playerWin++;
        playerScoreboard.textContent = playerWin;
    } else if (computerChoice == "ROCK" && playerChoice == "PAPER") {
        playerWin++;
        playerScoreboard.textContent = playerWin;
    } else {console.log("Something went wrong! " + computerChoice + " " + playerChoice)
        errors++;
    }
}





/* Play 5 rounds of rock, paper, scissors and keeps the score of who wins */
// function game() {
//     for (let i = 0; i < 1; i++) {
//         getComputerChoice();
//         // getPlayerSelection();
//         playRound(playerChoice, computerChoice);
        
//         console.log("Player Wins: " + playerWin + "\n" + "Computer Wins: " + computerWin + "\n" + "Ties: " + ties);
//     }

// /* Declares the winner */
//     if (playerWin > computerWin) {
//         console.log("Player Wins the Game!");
//     } else if (computerWin > playerWin) {
//         console.log("Computer Wins the Game!");
//     } else { console.log("It's a tie!");
//     };


// }
//game();