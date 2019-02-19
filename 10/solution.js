/*
Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. 
*/
function Solution() {
    const isPrime = (number) => {
        for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if(number%i < 1) return false;
        }
        return true;
    }

    const primeSequenceSum = (limit) => {
        let result = 0;
        for(var i = 2;i<limit;i++) {
            if(isPrime(i)) result += i;
        }
        return result;
    }

    Solution.prototype.isPrime = (number) => isPrime(number);

    Solution.prototype.solve = (limit) => primeSequenceSum(limit);

    Solution.prototype.solveProblem = () => primeSequenceSum(2000000);
}

module.exports = Solution;