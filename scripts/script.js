function getComputerChoice() {
    let comChoice = Math.round(Math.random() * 2);
    
    if(comChoice == 0) {
        return "rock";
    }
    else if(comChoice == 1) {
        return "paper";
    }
    else if(comChoice == 2) {
        return "scissors"
    }
};

let com_pts = 0;
let player_pts = 0;
let round = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt(`Round ${round+1} \n Enter rock, paper or scissors.`);
    computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();


    let playerWinMsg = `You won!!! ${playerSelection} beats ${computerSelection}.`;
    let computerWinMsg = `Computer won!!! ${computerSelection} beats ${playerSelection}`;
    
    if(playerSelection == computerSelection){
        com_pts += 1;
        player_pts += 1;
        return "It's a TIE";
    } else {
        if(playerSelection == 'rock' && computerSelection == 'paper') {
            com_pts += 1;
            return computerWinMsg;
        } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
            player_pts += 1;
            return playerWinMsg;
        } else if(playerSelection == 'paper' && computerSelection == 'rock') {
            player_pts += 1;
            return playerWinMsg;
        } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
            com_pts += 1;
            return computerWinMsg;
        } if(playerSelection == 'scissors' && computerSelection == 'paper') {
            player_pts += 1;
            return playerWinMsg;
        } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
            com_pts += 1;
            return computerWinMsg;
        } 
    }
}

function playGame() {

    for(round; round < 5; round++) {

        playRound();
        alert(`You: ${player_pts}\nCom: ${com_pts}`);
    }

    if(com_pts < player_pts) {
        console.log(`You Won!!! You scored ${player_pts} and Com scored ${com_pts}.`);
    } else if(com_pts > player_pts) {
        console.log(`Com Won!!! Com scored ${com_pts} and you scored ${player_pts}.`);
    } else {
        console.log("It's a TIE", `You score ${player_pts} and Com scored ${com_pts}.`);
    }

}

playGame()