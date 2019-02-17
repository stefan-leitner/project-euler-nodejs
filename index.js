'use strict';

console.log("+-++-++-++-++-++-++-+ +-++-++-++-++-+ +-++-++-++-++-++-++-++-++-+");
console.log("|p||r||o||j||e||c||t| |e||u||l||e||r| |s||o||l||u||t||i||o||n||s|");
console.log("+-++-++-++-++-++-++-+ +-++-++-++-++-+ +-++-++-++-++-++-++-++-++-+");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var solution;

rl.question("Enter Project Euler problem number to see the answer: ", (answer) => {
    try {
        solution = require('./' + answer + '/solution' );
        console.log('Answer: '+ new solution().solveProblem())
    } catch(err) {
        solution = console.log(`Problem no. ${answer} not solved yet!`)
    }
    rl.close();
})