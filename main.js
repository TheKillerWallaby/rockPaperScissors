let computerChoice;
function getComputerChoice() {
    //let computerChoiceNum = Math.floor(Math.random() * 3);
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
    
    console.log(computerChoice);
} 

getComputerChoice();

//function getPlayerSelection() {

//}

//function playRockPaperScissors(getComputerChoice, getPlayerSelection) {

//}