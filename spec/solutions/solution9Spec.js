describe('Problem 9 - Special Pythagorean triplet', () => {
    var Solution = require('../../9/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return empty [] if m is greater n', () => {
        let result = solution.constructTriplet(2,2)
        expect(result).toEqual([]);
    });

    it('Should return triplet for m=1 and n=2', () => {
        let result = solution.constructTriplet(1,2)
        expect(result).toEqual([3,4,5]);
    });

    it('Should return sum of Triplet [3,4,5]', () => {
        let result = solution.sumTriplet([3,4,5])
        expect(result).toEqual(12);
    });
    
});