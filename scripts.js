const displayComputerPick = document.getElementById('computer-pick');
const displayPlayerPick = document.getElementById('player-pick');
const displayWinner = document.getElementById('winner');
const options = document.querySelectorAll('button');
var playerChoice
var computerChoice
var winner

options.forEach(option => option.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    displayPlayerPick.innerHTML = playerChoice;
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
}

function getResult() {
    if (computerChoice === playerChoice) {
        winner = 'Tie'
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        winner = 'You Win'
    }
    if (computerChoice === 'rock' && playerChoice === 'scissor') {
        winner = 'You Lost'
    }
    if (computerChoice === 'paper' && playerChoice === 'scissor') {
        winner = 'You Win'
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        winner = 'You Lost'
    }
    if (computerChoice === 'scissor' && playerChoice === 'rock') {
        winner = 'You Win'
    }
    if (computerChoice === 'scissor' && playerChoice === 'paper') {
        winner = 'You Lost'
    }
    displayWinner.innerHTML = winner;
}