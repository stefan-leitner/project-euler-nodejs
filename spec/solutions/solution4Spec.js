describe('Problem 4 - Largest palindrome product', () => {
    var Solution = require('../../4/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return true if number is palindromic', () => {
        let result = solution.isPalindromic(10201);
        expect(result).toBe(true);
    });

    it('Should return false if number is not palindromic', () => {
        let result = solution.isPalindromic(998001);
        expect(result).toBe(false);
    });

    it('Should return the largest palindrome made from the product of two 2-digit numbers', () => {
        let result = solution.solve(2);
        expect(result).toBe(9009);
    });

    it('Should return the largest palindrome made from the product of two 3-digit numbers', () => {
        let result = solution.solve(3);
        expect(result).toBe(906609);
    });
});