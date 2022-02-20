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

function updateImages(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock':
            playerImg.setAttribute('src', './images/rock.png');
            break;
        case 'paper':
            playerImg.setAttribute('src', './images/paper.png');
            break;
        case 'scissors':
            playerImg.setAttribute('src', './images/scissors.png');
            break;
    }
    switch(computerSelection) {
        case 'rock':
            computerImg.setAttribute('src', './images/rock.png');
            break;
        case 'paper':
            computerImg.setAttribute('src', './images/paper.png');
            break;
        case 'scissors':
            computerImg.setAttribute('src', './images/scissors.png');
            break;
    }
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
    updateImages(playerSelection, computerSelection);
    if (roundWinner === 'player') {
        playerScore++;
        roundWin.textContent = `Round Won!`;
        playerSco.textContent = playerScore;
    }
    else if (roundWinner === 'computer') {
        computerScore++;
        roundWin.textContent = `Round Lost`;
        computerSco.textContent = computerScore;
    }
    else {
        roundWin.textContent =`It's a draw!`;
    }
    if (playerScore === 3 || computerScore === 3) {
        buttons.forEach(button => button.removeEventListener('click', playRound));
        showWinner();
        container.appendChild(playAgain, gameWin);
    }
}

function newRound () {
    playerScore = 0;
    computerScore = 0;
    playerSco.textContent = 0;
    computerSco.textContent = 0;
    gameWin.textContent = '';
    roundWin.textContent = '';
    container.removeChild(playAgain);
    buttons.forEach(button => button.addEventListener('click', playRound));
}

function showWinner() {
    if (playerScore > computerScore) {
        gameWin.textContent = `You won the game!`;
    }
    else {
        gameWin.textContent = `You lost the game`;
    }
}

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.container');
const playerSco = document.querySelector('.player-score');
const computerSco = document.querySelector('.computer-score');
const roundWin = document.querySelector('.roundwin');
const gameWin = document.querySelector('.gamewin');
const playAgain = document.createElement('button');
const btn = document.querySelectorAll('button');
const buttons = [...btn];
const playerImg = document.querySelector('.selected .player');
const computerImg = document.querySelector('.selected .computer');

buttons.forEach(button => button.addEventListener('click', playRound));
playAgain.addEventListener('click', newRound);
playAgain.textContent = 'Play again';

playAgain.classList.add('play-again');