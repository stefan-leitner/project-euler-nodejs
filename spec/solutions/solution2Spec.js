describe("Problem 2 - Even Fibonacci numbers", function() {
    var Solution = require('../../2/solution')
    var solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it("Should return correct Fibonacci numbers below 100", function() {
        let result = solution.fibonacci(100);
        expect(result).toEqual([1,2,3,5,8,13,21,34,55,89]);
    }) 
    
    it("Should return correct answer for sequence whose values don't exceed below 100", function() {
        let result = solution.solve(100);
        expect(result).toEqual(44);
    }) 
    it("Should return correct answer for sequence whose values don't exceed below 4.000.000", function() {
        let result = solution.solve(4000000);
        expect(result).toEqual(4613732);
    }) 
});