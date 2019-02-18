describe('Problem 5 - Smallest multiply', () => {
    var Solution = require('../../5/solution');
    var solution;
    
    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return smallest number that can be divided by 1 to 10 without remainder', () => {
        let result = solution.solve(10);
        expect(result).toEqual(2520);
    });

    it('Should return smallest number that can be divided by 1 to 20 without remainder', () => {
        let result = solution.solve(20);
        expect(result).toEqual(232792560);
    });
});