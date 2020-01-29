/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/
function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

function longestPalindrome(string) {
  let longestPalid = "";
  // split by words
  string.split(" ").forEach((word, index, array) => {
    // reverse word
    if (reverse(word) === word) {
      longestPalid = word.length > longestPalid.length ? word : longestPalid;
    }
  });
  console.log(longestPalid);
  return longestPalid;
}
longestPalindrome("My dad is a racecar athlete");
// input string
// output string
// constraints none
// Edge cases  none

// iterate
// check if it's palindro
// return the word
