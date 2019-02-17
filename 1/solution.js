/* 
Problem 1 - Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. 
*/

'use strict';

function Solution() {
    const sumMultiplies = (max) => {
        let sum = 0;
        for(var number = 1; number < max; number++) {
            if(number%3 == 0 || number%5 == 0) {
                sum+=number
            }
        }
        return sum;
    }

    // solution for maxNumber
    Solution.prototype.solve = (maxNumber) => {
        return sumMultiplies(maxNumber);
    } 

    // solution for index.js
    Solution.prototype.solveProblem = () => { 
        return sumMultiplies(1000); 
    }
}

module.exports = Solution;