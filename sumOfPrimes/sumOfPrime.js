/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

// Output:  number.
// Input:   number.
// Constraints: none.
// EdgeCase: postive numbers only.

// Time complexity: O(n)
// Space Complexity: O(n)
function sumOfPrimes(n) {
  let result = 0;
  while (n > 0) {
    // the exponential of number is for the next values
    if (Math.pow(2, n - 1) % n === 1) {
      result += n;
    }
    n--;
  }
  console.log(result);
  return result;
}
sumOfPrimes(10);
