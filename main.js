let computerChoice;
let playerChoice; 
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
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        cconsole.log("You lose! " + computerChoice + " beats " + playerChoice);
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        cconsole.log("You lose! " + computerChoice + " beats " + playerChoice);
    } else if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    } else if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    } else if (computerChoice == "ROCK" && playerChoice == "PAPER") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    } else {"Something went wrong! " + computerChoice + " " + playerChoice}
}
getComputerChoice();
getPlayerSelection();
playRound(playerChoice, computerChoice);