/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
var coins = [1, 2, 5, 10, 20, 50, 100, 200];
// Output: array of posibilites
// Input: nubmer
// Constraints: none.
// Edge Cases: none.

function coinSums(total) {
  // iterate
  //naive solution
  let counter = 1;
  let result = coins.map(one => {
    counter = 1;
    if (one > total) {
      return;
    }
    while (counter * one < total) {
      counter++;
    }
    return one * counter === total ? counter * one : coinSums();
  });
  // the compilation number === total
  console.log(result);
}
coinSums(5);
