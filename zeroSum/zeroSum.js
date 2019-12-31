/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/
//input => array of numbers
//output => boolean

function zeroSum(array) {
    var elementObj = {}
    array.forEach(element => { elementObj[element] = element })
    for (var key in elementObj) {
        if (elementObj[-(JSON.parse(key))]) {
            return true
        }
    }
    return false
}
