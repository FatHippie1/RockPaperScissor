const displayComputerPick = document.getElementById('computer-pick');
const displayYourPick = document.getElementById('your-pick');
const displayWinner = document.getElementById('winner');
const options = document.querySelectorAll('button');
var userChoice
var computerChoice
var winner

options.forEach(option => option.addEventListener('click', (e) => {
    userChoice = e.target.id;
    displayYourPick.innerHTML = userChoice;
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
    if (computerChoice === userChoice) {
        winner = 'Tie'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        winner = 'You Win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissor') {
        winner = 'You Lost'
    }
    if (computerChoice === 'paper' && userChoice === 'scissor') {
        winner = 'You Win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        winner = 'You Lost'
    }
    if (computerChoice === 'scissor' && userChoice === 'rock') {
        winner = 'You Win'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper') {
        winner = 'You Lost'
    }
    displayWinner.innerHTML = winner;
}