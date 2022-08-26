const displayComputerPick = document.getElementById('computer-pick');
const displayPlayerPick = document.getElementById('player-pick');
const displayWinner = document.getElementById('winner');
const options = document.querySelectorAll('button');
var playerChoice
var computerChoice
var winner

options.forEach(option => option.addEventListener('click', function (e) {
    if (e.target !== this) {
        playerChoice = e.target.parentElement.id;
    } else {
        playerChoice = e.target.id;
    }

    displayPlayerPick.innerHTML = playerChoice;
    console.log('player:' + ' ' + playerChoice);
    generateComputerchoice();
    getResult();
}));

function generateComputerchoice() {
    const randomNumber = Math.floor(Math.random() * options.length);
    console.log(randomNumber);

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissor'
    }

    displayComputerPick.innerHTML = computerChoice;
    console.log('computer:' + ' ' + computerChoice);
}

function getResult() {
    if (computerChoice === playerChoice) {
        winner = 'Tie'
    }
    if ((computerChoice === 'rock' && playerChoice === 'paper') || (computerChoice === 'paper' && playerChoice === 'scissor') || (computerChoice === 'scissor' && playerChoice === 'rock')) {
        winner = 'You Win'
    }
    if ((computerChoice === 'rock' && playerChoice === 'scissor') || (computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'scissor' && playerChoice === 'paper')) {
        winner = 'You Lost'
    }
    displayWinner.innerHTML = winner;
}

/*
switch (computerChoice == 'rock') {
    case playerChoice == 'rock':
        winner = 'Tie'
        console.log(winner);
        break;
    case playerChoice == 'paper':
        winner = 'user'
        console.log(winner);
        break;
    case playerChoice == 'scissor':
        winner = 'computer'
        console.log(winner);
        break;
}
switch (computerChoice == 'paper') {
    case playerChoice == 'paper':
        winner = 'Tie';
        console.log(winner);
        break;
    case playerChoice == 'scissor':
        winner = 'user';
        console.log(winner);
        break;
    case playerChoice == 'rock':
        winner = 'computer';
        console.log(winner);
        break;
}
switch (computerChoice == 'scissor') {
    case playerChoice == 'scissor':
        winner = 'Tie';
        console.log(winner);
        break;
    case playerChoice == 'rock':
        winner = 'user';
        console.log(winner);
        break;
    case playerChoice == 'paper':
        winner = 'computer';
        console.log(winner);
        break;
}
*/
