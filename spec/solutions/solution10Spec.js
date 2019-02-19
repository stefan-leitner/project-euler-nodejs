describe('Problem 10 - Summation of primes', () => {
    var Solution = require('../../10/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return true if number is prime', () => {
        let result = solution.isPrime(11);
        expect(result).toBe(true);
    });

    it('Should return false if number is not prime', () => {
        let result = solution.isPrime(1909);
        expect(result).toBe(false);
    });

    it('Should return the sum of the primes below 10', () => {
        let result = solution.solve(10);
        expect(result).toBe(17);
    });

    it('Should return the sum of the primes below 2 million', () => {
        let result = solution.solve(2000000);
        expect(result).toBe(142913828922);
    });
});