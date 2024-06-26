const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or possibleChoice.length
    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    if(randomNumber === 2) {
        computerChoice = 'paper';
    }
    if(randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    getResult();
}

function getResult() {
    if(computerChoice === userChoice) {
        resultDisplay.innerHTML = "Draw!";
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = "You win!";
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = "You lose!";
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = "Oops!";
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = "You win!";
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = "You win!";
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = "Not quite, buddy!";
    }
}


