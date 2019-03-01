describe('Problem 29 - Distinct powers', () => {
    var Solution = require('../../29/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return number of distinct terms', () => {
        let result = solution.getNumberOfDistinctTerms(5);
        expect(result).toBe(15);
    });
});