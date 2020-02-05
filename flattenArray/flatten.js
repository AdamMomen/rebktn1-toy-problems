/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/
//naive solution
function flatten(arr) {
  console.log(arr.flat());
}

function flatMeIfyouCan(arr) {
  function flatHelper(array = [], index = 0) {
    if (index === arr.length) {
      return array;
    }
    if (Array.isArray(arr[index])) {
      array = flatHelper(array.concat(...arr[index]), index + 1);
    } else {
      array = flatHelper(array.concat(arr[index]), index + 1);
    }
    return array;
  }
  console.log(flatHelper());
}
flatMeIfyouCan([[1, 1], [4], 3, [3], 4, [6, 7]]); // [1, 1, 4, 3, 3, 4, 6, 7]
