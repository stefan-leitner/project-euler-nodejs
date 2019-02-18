describe('Problem 3 - Largest prime factor', () => {
    var Solution = require('../../3/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return true if number is prime', () => {
        let result = solution.isPrime(11);
        expect(result).toBe(true);
    });

    it('Should return false if number is not prime', () => {
        let result = solution.isPrime(18);
        expect(result).toBe(false);
    });

    it('Should return largest prime factor for 13195', () => {
        let result = solution.solve(13195);
        expect(result).toEqual(29);
    });

    it('Should return largest prime factor for 600851475143', () => {
        let result = solution.solve(600851475143);
        expect(result).toEqual(6857);
    });
});