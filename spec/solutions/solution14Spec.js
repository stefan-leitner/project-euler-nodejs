describe('Problem 14 - Longest Collatz sequence', () => {
    var Solution = require('../../14/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should return true if number is even', () => {
        let result = solution.isEven(1984)
        expect(result).toBe(true);
    })

    it('Should return false if number is odd', () => {
        let result = solution.isEven(1909)
        expect(result).toBe(false);
    })

    it('Should return the sequence for starting number 13', () => {
        let result = solution.buildCollatzSequence(13)
        expect(result).toEqual([13,40,20,10,5,16,8,4,2,1]);
    });

    it('Should return the number with the longest sequence', () => {
        let result = solution.solve(10)
        expect(result).toEqual(9);
    });
});