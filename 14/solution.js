/*
Problem 14 - Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
                13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10
terms. Although it has not been proved yet (Collatz Problem), it is thought that 
all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million. 
*/
function Solution() {

    const isEven = (number) => number%2 < 1

    const calcNextElement = (number) => {
        if(isEven(number)) return number/2
        return 3*number+1
    }

    const buildCollatzSequence = (start) => {
        let sequence = [start]
        var element = start
        do{
            element = calcNextElement(element)
            sequence.push(element)
        } while(element > 1)
        return sequence
    }

    const calcNumberWithLongestSequence = (limit) => {
        let result = []
        for(var i = 0; i < limit; i++) {
            result.push([i,buildCollatzSequence(i).length])
        }
        return result.reduce((pre,val) => pre[1] > val[1] ? pre : val)[0]
    }
    
    Solution.prototype.isEven = (number) => isEven(number)

    Solution.prototype.buildCollatzSequence = (start) => buildCollatzSequence(start)
    
    Solution.prototype.solve = (limit) => calcNumberWithLongestSequence(limit)

    Solution.prototype.solveProblem = () => calcNumberWithLongestSequence(1000000)

}

module.exports = Solution;