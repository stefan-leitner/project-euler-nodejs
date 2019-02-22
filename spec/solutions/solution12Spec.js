describe('Problem 12 - Highly divisible triangular number', () => {
    var Solution = require('../../12/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return n-th triangular number', () => {
        let result = solution.getTriangleNumber(7);
        expect(result).toEqual(28);
    });

    it('Should return factors for triangular number 28', () => {
        let result = solution.getFactorsForTriangleNumber(28);
        expect(result).toEqual([1,2,4,7,14,28]);
    });
    
    it('Should return first triangular number with more than 5 divisors ', () => {
        let result = solution.getTriangleNumberWithMoreDivisors(5)
        expect(result).toBe(28);
    });
});