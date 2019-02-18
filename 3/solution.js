/*
Problem 3 - Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ? 
*/
function Solution() {

    const isPrime = (number) => {
        limit = Math.floor(Math.sqrt(number))
        for(var i = 2; i<=limit; i++){
            if(number%i < 1) return false;
        }
        return true;
    }

    const largestPrimfactor = (number, primfactors) => {
        for(var i = 2;i<=number;i++){
            if(isPrime(i) && number%i == 0) {
                var result = number/i
                primfactors.push(i)
                return largestPrimfactor(result,primfactors)
            }
        }
        return primfactors.pop();
    }

    Solution.prototype.isPrime = (number) => {
        return isPrime(number);
    }

    Solution.prototype.solve = (number) => {
        return largestPrimfactor(number, []);
    }

    // called by index.js
    Solution.prototype.solveProblem = () => {
        return largestPrimfactor(600851475143, []);
    }
} 

module.exports = Solution;