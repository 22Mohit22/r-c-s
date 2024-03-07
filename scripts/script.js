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

// let list = ["rock", "paper", "scissor"];

// function playRound(playerSelection, computerSelection) {

//     let playerWinMsg = `You won!!! ${playerSelection} beats ${computerSelection}.`;
//     let computerWinMsg = `Computer won!!! ${computerSelection} beats ${playerSelection}`;


//     if(playerSelection in list) {
//         if(playerSelection == computerSelection) {
//             return "It's a TIE";
//         } else {
//             if(playerSelection == 'rock' && computerSelection == 'paper') {
//                 return computerWinMsg;
//             } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
//                 return playerWinMsg;
//             } else if(playerSelection == 'paper' && computerSelection == 'rock') {
//                 return playerWinMsg;
//             } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
//                 return computerWinMsg;
//             } if(playerSelection == 'scissors' && computerSelection == 'paper') {
//                 return playerWinMsg;
//             } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
//                 return computerWinMsg;
//             } 
//         }
//     } else {
//         alert('Please write "rock", "paper" or "scissors".');
//         playRound();
//     }
// }


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    console.log(playerSelection);

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
