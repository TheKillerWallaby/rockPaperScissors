let computerChoice;
let playerChoice; 
let computerWin = 0;
let playerWin = 0;
let ties = 0;
let errors = 0;
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    computerChoice = computerChoice.toUpperCase();
    return computerChoice;
} 

function getPlayerSelection() {
    playerChoice = prompt("What's your choice rock, paper, or scissors?");
    playerChoice = (playerChoice.toUpperCase());
    return playerChoice;
}

function playRound() {
    if (computerChoice == playerChoice) {
        console.log("Its a tie!");
        ties++;
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
        computerWin++;
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
        computerWin++;
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
        computerWin++;
    } else if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        playerWin++;
    } else if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        playerWin++;
    } else if (computerChoice == "ROCK" && playerChoice == "PAPER") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        playerWin++;
    } else {console.log("Something went wrong! " + computerChoice + " " + playerChoice)
        errors++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerSelection();
        playRound(playerChoice, computerChoice);
        
        console.log("Player Wins: " + playerWin + "\n" + "Computer Wins: " + computerWin + "\n" + "Ties: " + ties);
    }

    if (playerWin > computerWin) {
        console.log("Player Wins the Game!");
    } else if (computerWin > playerWin) {
        console.log("Computer Wins the Game!");
    } else { console.log("It's a tie!");
    }

}

game();