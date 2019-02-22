/* 
Problem 20 - Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! 
*/
function Solution() {

    const factorial = (number) => {
        number = BigInt(number)
        let f = number;
        for(var i = 1n; i<number;i++){
            f *= (number-i)
        }
        return f
    }

    const sumDigits = (number) => number.toString().split('').map(e => parseInt(e)).reduce((acc,val)=>acc+val,0);

    Solution.prototype.sumDigits = (n) => sumDigits(n);
    
    Solution.prototype.factorial = (n) => factorial(n);

    Solution.prototype.solveProblem = () => sumDigits(factorial(100))
}

module.exports = Solution;