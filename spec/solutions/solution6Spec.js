describe('Problem 6 - Sum square difference', () => {
    var Solution = require('../../6/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return the difference sum of suqares and square of the sum of the first ten natural numbers', () => {
        let result = solution.solve(10);
        expect(result).toBe(2640);
    });
    
});