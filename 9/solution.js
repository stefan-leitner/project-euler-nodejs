/* 
Problem 9 - Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. 
*/
function Solution() {
    /* 
    Construct triplets
    When m and n are any two positive integers (m < n):
    a = n^2 - m^2
    b = 2*n*m
    c = n^2 + m^2 
    */
    const constructTriplet = (m,n) => {
        if(m>=n) return [];
        let a = Math.pow(n,2) - Math.pow(m,2);
        let b = 2*n*m
        let c = Math.pow(n,2) + Math.pow(m,2);
        return [a,b,c];
    }

    const sumTriplet = (triplet) => triplet.reduce((acc,val)=>acc+val,0)

    const findTriplet = (r) => {
        var result = [];
        var m = 1;
        var n = 2;
        for(var i = 1;i<r/2; i++){
            result = [];
            m = i
            n = i+1
            do {
                result = constructTriplet(m,n);
                if(sumTriplet(result) == r) return result
                n++;
            } while(sumTriplet(result)<=r)
        }
        return result;
    }

    Solution.prototype.sumTriplet = (t) => sumTriplet(t);

    Solution.prototype.constructTriplet = (m,n) => constructTriplet(m,n);

    Solution.prototype.solveProblem = () => findTriplet(1000).reduce((acc,val)=>acc*val);
}

module.exports = Solution;