describe('Problem 25 - 1000-digit Fibonacci number', () => {
    var Solution = require('../../25/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return index of first three digit fibonnaci number', () => {
        let result = solution.solve(3)
        expect(result).toEqual(12);
    });
});