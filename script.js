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
    let playerSelection = this.className;
    let roundWinner = returnRoundWinner(playerSelection, computerSelection);
    if (roundWinner === 'player') {
        playerScore++;
        roundWin.textContent = `Round Won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    }
    else if (roundWinner === 'computer') {
        computerScore++;
        roundWin.textContent = `Round Lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
    else {
        roundWin.textContent =`It's a draw! You both picked ${capitalize(computerSelection)}. Round restarted.`;
    }
    scoreBoard.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    if (playerScore === 3 || computerScore === 3) {
        buttons.forEach(button => button.removeEventListener('click', playRound));
        showWinner();
        body.appendChild(playAgain, gameWin);
    }
}

function newRound () {
    playerScore = 0;
    computerScore = 0;
    scoreBoard.textContent = 'Player 0 : 0 Computer';
    gameWin.textContent = '';
    roundWin.textContent = '';
    body.removeChild(playAgain);
    buttons.forEach(button => button.addEventListener('click', playRound));
}

function showWinner() {
    if (playerScore > computerScore) {
        gameWin.textContent = `You won the game!`;
    }
    else {
        gameWin.textContent = `You lost the game!`;
    }
}

let playerScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll('button');
const buttons = [...btn];
buttons.forEach(button => button.addEventListener('click', playRound));
const scoreBoard = document.querySelector('.scoreboard');
const body = document.querySelector('body');
const gameWin = document.querySelector('.gamewin');
const roundWin = document.querySelector('.roundwin');
const playAgain = document.createElement('button');
playAgain.textContent = 'Play again';
playAgain.addEventListener('click', newRound);