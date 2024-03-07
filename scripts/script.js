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

