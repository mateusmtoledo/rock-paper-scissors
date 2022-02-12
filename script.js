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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') 
    {
        return ('You Win! ' + playerSelection + ' beats ' + computerSelection);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' || 
    playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors') 
    {
        return ('You Lose! ' + computerSelection + ' beats ' + playerSelection);
    }
    else {
        return ('It\'s a draw! You both picked ' + computerSelection);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('Make a choice: Rock, Paper or Scissors: ').toLowerCase();
        while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt('Invalid Selection. Choose again (Rock, Paper or Scissors):' ).toLowerCase();
        }
        let winnerMessage = playRound(playerSelection.toLowerCase(), computerPlay());
        if(winnerMessage.charAt(4) === 'W') {
            playerScore++;
        }
        else if(winnerMessage.charAt(4) === 'L') {
            computerScore++;
        }
        console.log('Round ' + i + ': ' + winnerMessage);
        console.log('Current score: Player ' + playerScore + ':' + computerScore + ' Computer');
    }
    if (playerScore > computerScore) {
        console.log('You win! ' + playerScore + ' to ' + computerScore);
    }
    else if(playerScore < computerScore) {
        console.log('You lose! ' + playerScore + ' to ' + computerScore);
    }
    else {
        console.log('It\'s a draw! Final result: ' + playerScore + ' to ' + computerScore);
    }
}

game();