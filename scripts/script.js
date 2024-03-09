buttonEl = document.querySelectorAll('.btn');
resultEl = document.querySelector('#roundResult');

let com_pts = 0;
let player_pts = 0;
let round = 0;

buttonEl.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id, computerChoice);
    })
})

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

let computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice) {
    console.log("You:",playerChoice);
    console.log("Com:",computerChoice);

    let playerWinMsg = `You won!!! ${playerChoice} beats ${computerChoice}.`;
    let computerWinMsg = `Computer won!!! ${computerChoice} beats ${playerChoice}`;

    if(playerChoice == computerChoice){
        com_pts += 1;
        player_pts += 1;
        resultEl.textContent = "It's a TIE";
    } else {
        if(playerChoice == 'rock' && computerChoice == 'paper') {
            com_pts += 1;
            resultEl.textContent = computerWinMsg;
        } else if(playerChoice == 'rock' && computerChoice == 'scissors') {
            player_pts += 1;
            resultEl.textContent = playerWinMsg;
        } else if(playerChoice == 'paper' && computerChoice == 'rock') {
            player_pts += 1;
            resultEl.textContent = playerWinMsg;
        } else if(playerChoice == 'paper' && computerChoice == 'scissors') {
            com_pts += 1;
            resultEl.textContent = computerWinMsg;
        } if(playerChoice == 'scissors' && computerChoice == 'paper') {
            player_pts += 1;
            resultEl.textContent = playerWinMsg;
        } else if(playerChoice == 'scissors' && computerChoice == 'rock') {
            com_pts += 1;
            resultEl.textContent = computerWinMsg;
        } 
    }
}