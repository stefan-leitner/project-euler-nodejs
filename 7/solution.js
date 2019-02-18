/*
Problem 7: 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number? 
*/
function Solution() {
    const isPrime = (number) => {
        for(var i=2; i<=Math.floor(Math.sqrt(number)); i++){
            if(number%i < 1) return false
        }
        return true
    }

    const getPrimeNumber = (number) => {
        let primeNumbers = []
        for(var i = 2;;i++) {
            if(isPrime(i)) {
                primeNumbers.push(i)
                if(primeNumbers.length == number) break;
            }
        }
        return primeNumbers[primeNumbers.length-1]
    }

    Solution.prototype.isPrime = (number) => {
        return isPrime(number);
    }
    
    Solution.prototype.solve = (number) => {
        return getPrimeNumber(number);
    }

    Solution.prototype.solveProblem = () => {
        return getPrimeNumber(10001)
    }
}

module.exports = Solution;