describe('Problem 13 - Large sum', () => {
    var Solution = require('../../13/solution');
    var solution;

    beforeEach(() => {
        solution = new Solution();
    });

    it('Should sum numbers in a multiline string and return BigInt', () => {
        const str = `123123123
        234234234
        123123123`
        
        let result = solution.sumDigits(str);
        expect(result).toBe(480480480n);
    });

    
});