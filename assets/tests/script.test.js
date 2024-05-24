const { JSDOM } = require('jsdom');

import { test } from '../../RPS-MP/script.js';

// Import the functions to test
const { generateComputerChoice, getResult } = require('../js/script');

// Test generateComputerChoice function
test('generateComputerChoice should return a valid choice', () => {
    const choice = generateComputerChoice();
    expect(['rock', 'paper', 'scissors']).toContain(choice);
});

// Test getResult function
test('getResult should return the correct result', () => {
    // Test for a draw
    expect(getResult('rock', 'rock')).toBe('Draw!');

    // Test for user win
    expect(getResult('rock', 'paper')).toBe('You win!');
    expect(getResult('paper', 'scissors')).toBe('You win!');
    expect(getResult('scissors', 'rock')).toBe('You win!');

    // Test for user loss
    expect(getResult('rock', 'scissors')).toBe('You lose!');
    expect(getResult('paper', 'rock')).toBe('You lose!');
    expect(getResult('scissors', 'paper')).toBe('You lose!');
});
