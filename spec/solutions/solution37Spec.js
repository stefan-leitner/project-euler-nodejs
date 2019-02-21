describe('Problem 37 - Truncatable primes', () => {
    var Solution = require('../../37/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return true if number is prime', () => {
        let result = solution.isPrime(13);
        expect(result).toBe(true);
    });

    it('Should return false if number is not prime', () => {
        let result = solution.isPrime(1);
        expect(result).toBe(false);
    });

    it('Should return true if prime is truncatable from left and right', () => {
        let result = solution.isTruncatablePrime(3797);
        expect(result).toBe(true);
    });

    it('Should return false if prime is not truncatable from left and right', () => {
        let result = solution.isTruncatablePrime(11);
        expect(result).toBe(false);
    });
    
});