/*
Problem 37  - Truncatable primes

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes. 
*/
function Solution() {

    const isPrime = (number) => {
        if(number==1) return false;
        for(var i = 2; i <= Math.floor(Math.sqrt(number));i++){
            if(number%i < 1) return false;
        }
        return true;
    }
    
    const truncatableSequence = (number) => {
        let numbers = [];
        for(var i = 0; i < number.toString().length; i++){
            if(i != 0) numbers.push(number.toString().slice(0,i))
            numbers.push(number.toString().slice(i))
        }
        return numbers.map(v => parseInt(v))
    }

    const isTruncatablePrime = (number) => {
        let seq = truncatableSequence(number);
        for(var i=0; i<seq.length; i++){
            if(!isPrime(seq[i])) return false
        }
        return true
    }

    const gatherPrimes = () => {
        let result = []
        for(var i = 11; result.length<11; i++){
            if(isTruncatablePrime(i)) result.push(i)
        }
        return result
    }

    Solution.prototype.isPrime = (n) => isPrime(n);

    Solution.prototype.isTruncatablePrime = (n) => isTruncatablePrime(n);

    Solution.prototype.solveProblem = () => gatherPrimes().reduce((acc,val) => acc + val,0);
}

module.exports = Solution;