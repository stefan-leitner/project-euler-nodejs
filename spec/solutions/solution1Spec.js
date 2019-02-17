describe("Problem 1 - Multiples of 3 and 5", function() {
    var Solution = require('../../1/solution')
    var solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it("Should return correct answer for numbers below 10", function() {
        let result = solution.solve(10);
        expect(result).toEqual(23);
    }) 
    it("Should return correct answer for numbers below 1000", function() {
        let result = solution.solve(1000);
        expect(result).toEqual(233168);
    }) 
});