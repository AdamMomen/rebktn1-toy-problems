// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]
// // Edge Case:  The array is already sorted !!!
function bubbleSort(input, index1 = 0) {
  if (index1 === input.length - 1 || !count) {
    return input;
  }
  function bubbleSortHelper(array, index1, index2 = 0, count = 0) {
    if (index2 === array.length - 1) {
      return;
    }
    if (array[index1] < array[index2]) {
      count + 1;
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    }
    bubbleSortHelper(input, index1, index2 + 1, count);
  }
  bubbleSortHelper(input, index1, count + 1);
  return bubbleSort(input, index1 + 1);
}
console.log(bubbleSort([20, -10, -10, 2, 4, 299]));
