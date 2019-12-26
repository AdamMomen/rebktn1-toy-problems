/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
//first soli
var allAnagrams = function (string) {
  var solution = [];
  var charObj = {};
  var str = '';
  //spilit the input
  string.split('').forEach((char, index) => {
    //store it in object
    charObj[index] = char;
  })
  //while  length is not as the power of strign t0 3
  while (solution.length < Math.pow(string.length, string.length)) {
    for (let i = 0; i < string.length; i++) {
      // get a random number 
      let random = getRandomInt(string.length)
      str += charObj[i]
    }
    // if not exitst add it to the array
    if (!solution.includes(str)) {
      solution.push(str)
    }
    str = '';
  }
  return solution;
};
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//input => string
//output => array of strings

///////////////////////////////////////////////////


//recursive appraoch
//okay adam you can do this 
//

var allAnagrams = (string) => {
  var solution = []

  function allAnagramsHelper(char) {
    var chary = char || '';
    if (char = string.length) {
      solution.push(char)
    }
  }
  string.split('').forEach((currnetChar) => {
    allAnagramsHelper(currnetChar + chary);
  }	
	return solution;
}
