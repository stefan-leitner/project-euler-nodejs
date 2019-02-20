/*
Problem 6 -  Sum square difference
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
function Solution() {

    const sumSquareDifference = (n) => {
        let sumOfSquares = 0, squareOfSum = 0;
        for(var i=1; i<=n;i++){
            sumOfSquares += Math.pow(i,2);
            squareOfSum += i;
        }
        return  Math.pow(squareOfSum,2) - sumOfSquares;
    }

    Solution.prototype.solve = (n) => sumSquareDifference(n)

    Solution.prototype.solveProblem = () => sumSquareDifference(100)
}

module.exports = Solution;