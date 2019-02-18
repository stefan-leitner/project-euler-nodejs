describe('Problem 8  - Largest product in a series', () => {
    var Solution = require('../../8/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return greatest product of 4 adjacent digits out of 1000-digit number', () => {
        let result = solution.solve(4);
        expect(result).toBe(5832);
    });

    it('Should return greatest product of 13 adjacent digits out of 1000-digit number', () => {
        let result = solution.solve(13);
        expect(result).toBe(23514624000);
    });
});