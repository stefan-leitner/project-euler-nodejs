/* 
Problem 4 - Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. 
*/
function Solution() {
    const isPalindromic = (number) => number.toString() === number.toString().split('').reverse().join('');

    const isXDigitProduct = (number, numDigits) => {
        let div = calcDigitNumber(numDigits);
        while(div>0){
            if(number%div == 0 && number/div <= calcDigitNumber(numDigits)) return true;
            div--;
        }
        return false;
    }
    
    const calcHighestNumber = (numDigits) => Math.pow(calcDigitNumber(numDigits),2);

    const calcDigitNumber = (numDigits) => {
        let number = "";
        let x = 0;
        while(x < numDigits){
            number += "9";
            x++;
        }
        return parseInt(number);
    }
    
    const getHighestPalindromicNumber = (numDigits) => {
        var highestNumber = calcHighestNumber(numDigits);
        while(highestNumber > calcHighestNumber(numDigits-1)) {
            if(isPalindromic(highestNumber) && isXDigitProduct(highestNumber,numDigits)) return highestNumber;
            highestNumber--;
        } 
    }

    Solution.prototype.isPalindromic = (number) => isPalindromic(number);
    
    Solution.prototype.solve = (number) => getHighestPalindromicNumber(number);

    Solution.prototype.solveProblem = () => getHighestPalindromicNumber(3);
}

module.exports = Solution;