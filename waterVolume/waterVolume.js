/*
You are given an array of numbers that each represent the height of an adjoining building. 
During torrential rain, water collects in the spaces between buildings. 
What is the maximum amount of water collected by the buildings represented by the array?

Explanation: An input of [3,0,3] can be visualized as such:

 __    __
|  |//|  |
|  |//|  |
|  |//|  |
‾‾‾‾‾‾‾‾‾‾
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.
Challenge: do this in O(n) with < 2 pass-throughs

volume([ 3, 0, 3 ]) // 3
volume([ 1, 2, 3, 4, 0, 5, 3, 1 ]) // 4
volume([1,2,3,2,1]) // 0

*/
// Input:array
// Output: number
// Constraints: O(n) linear
// Edge cases: none.
//Naive solution:
function volume(heights) {
  let volume = 0;
  heights.forEach((element, index, array) => {
    if (element > array[index + 1] && array[index + 1] < array[index + 2]) {
      volume =
        element - array[index + 1] > volume
          ? element - array[index + 1]
          : volume;
    }
  });
  console.log(volume);
  return volume;
}
volume([4, 0, 0, 4]); // 3
volume([1, 2, 3, 4, 0, 5, 3, 1]); // 4
volume([1, 2, 3, 2, 1]); // 0
