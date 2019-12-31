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
  var numbersObj = {}
  // fill the object with numbers
  array.forEach(element => { numbersObj[element] = element })
  for (var key in numbersObj) {
    // check if we have reverse sign number of each number
    if (numbersObj[-(JSON.parse(key))]) {
      return true
    }
  }
  return false
}
