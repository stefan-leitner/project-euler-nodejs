describe('Problem 20 -Factorial digit sum', () => {
    var Solution = require('../../20/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return factorial for 10', () => {
        let result = solution.factorial(10)
        expect(result).toEqual(3628800n);
    });

    it('Should return sum of digits', () => {
        let result = solution.sumDigits(3628800)
        expect(result).toBe(27);
    });
});