/*
Problem 5 - Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function Solution() {
    const smallestMultiply = (number) => {
        let dividers = calcDividers(number);
        let result = 0;
        for(var i = number;;i+=number){
            isSmallestMuliply = false;
            for(var j=0; j < dividers.length; j++){
                if(i%dividers[j] == 0) {
                    isSmallestMuliply = true;
                } else {
                    isSmallestMuliply = false;
                    break;
                }
            }
            if(isSmallestMuliply) {
                result = i;
                break;
            }
        }
        return result;
    }

    const calcDividers = (number) => {
        let dividers = [];
        for(var i = 2; i<=number; i++){
            dividers.push(i);
        }
        dividers.reverse().forEach(element => {
            dividers.forEach(div => {
                if(element % div == 0 && element != div) dividers.splice(dividers.indexOf(div), 1);
            })
        });
        dividers.shift();
        return dividers;
    }

    Solution.prototype.solve = (number) => {
        return smallestMultiply(number);
    }

    Solution.prototype.solveProblem = () => {
        return smallestMultiply(10);
    }
}

module.exports = Solution;