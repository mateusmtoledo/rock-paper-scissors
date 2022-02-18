function isValidInput(playerSelection) {
    if (playerSelection !== 'rock' &&
            playerSelection !== 'paper' &&
            playerSelection !== 'scissors') {
        return 0;
    }
    return 1;
}

function capitalize(string) {
    let newString = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    return newString;
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;
    switch(randomNumber) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
    }
    return computerSelection;
}

function returnRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'player';
    }
    else {
        return 'computer';
    }
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt('Make a choice: Rock, Paper or Scissors: ').toLowerCase();
    while(!isValidInput(playerSelection)) {
        playerSelection = prompt('Invalid Selection. Choose again (Rock, Paper or Scissors):' ).toLowerCase();
    }
    let roundWinner = returnRoundWinner(playerSelection, computerSelection);
    if (roundWinner === 'player') {
        playerScore++;
        console.log(`Round Won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
    }
    else if (roundWinner === 'computer') {
        computerScore++;
        console.log(`Round Lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
    }
    else {
        console.log(`It's a draw! You both picked ${capitalize(computerSelection)}. Round restarted.`);
        playRound();
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`)
        playRound();
        console.log(`Current score: Player ${playerScore} : ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log(`You won the game! ${playerScore} to ${computerScore}`);
    }
    else {
        console.log(`You lost the game! ${playerScore} to ${computerScore}`);
    }
}

let playerScore = 0;
let computerScore = 0;
game();