describe('Problem 7 - 10001st prime', () => {
    var Solution = require('../../7/solution')
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return true if number is prime', () => {
        let result = solution.isPrime(11);
        expect(result).toBe(true);
    });

    it('Should return false if number is not prime', () => {
        let result = solution.isPrime(2352);
        expect(result).toBe(false);
    });

    it('Should return the 6th prime number', () => {
        let result = solution.solve(6);
        expect(result).toBe(13)
    });

    it('Should return the 10001st prime number', () => {
        let result = solution.solve(10001);
        expect(result).toBe(104743)
    });
});