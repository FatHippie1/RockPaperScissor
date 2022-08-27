const displayComputerPick = document.getElementById('computer-pick');
const displayPlayerPick = document.getElementById('player-pick');
const displayWinner = document.getElementById('winner');
const options = document.querySelectorAll('button');
const displayScorePlayer = document.getElementById('scorePlayer');
const displayScoreComputer = document.getElementById('scoreComputer');
var playerChoice;
var computerChoice;
var winner;
var computerWin = 0;
var playerWin = 0;

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
        playerWin = (playerWin + 1)
    }

    if ((computerChoice === 'rock' && playerChoice === 'scissor') || (computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'scissor' && playerChoice === 'paper')) {
        winner = 'You Lost'
        computerWin = (computerWin + 1)
    }

    displayWinner.innerHTML = winner;
    displayScorePlayer.innerHTML = playerWin;
    displayScoreComputer.innerHTML = computerWin;
}

