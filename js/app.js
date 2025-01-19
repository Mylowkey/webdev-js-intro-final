"use strict";

// variables
let computerGuess = Math.floor(Math.random() * 10) + 1;
let guessCount = 3 ; 
let guessHistory = [];

// linking the html elements
const guessInput = document.getElementById('guess-input');
const guessMessage = document.getElementById('guess-message');
const currentGuess = document.getElementById('current-guess');
const computerGuessElement = document.getElementById('computer-guess');
const resultHistory = document.getElementById('guess-history');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');

restartButton.disabled = true;

//Player guess
function guessMessageFu() {
    const playerGuess = parseInt(guessInput.value);
    currentGuess.textContent = playerGuess;
}

// check guess 
function checkGuess() {}
    if (playerGuess === computerGuess) {
        guessMessage.innerHTML = 'Congratulations! You guessed the number!'; // just discovered that I could do innerHTML or textContent instead of console.log
    } else if (playerGuess > computerGuess) {
        guessMessage.innerHTML = 'Too High!;';
    } else {
        guessMessage.innerHTML = 'Too Low!';
    }
