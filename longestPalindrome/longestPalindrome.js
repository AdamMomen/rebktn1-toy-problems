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
    let prevWord = index > 0 && array[index - 1] ? array[index - 1] : "";
    let nextWord =
      index < array.length - 1 && array[index + 1] ? array[index + 1] : "";
    // reverse word
    if (reverse(word) === word) {
      for (let i = 0; i < nextWord.length; i++) {
        for (let j = prevWord.length - 1; j >= 0; j--) {
          let newWord = `${prevWord[j]}  ${word}  ${nextWord[i]}`;
          longestPalid =
            reverse(newWord) === newWord && newWord.length > longestPalid.length
              ? newWord
              : longestPalid;
        }
      }
    }
  });
  console.log(longestPalid);
  return longestPalid;
}
longestPalindrome("My dad is a racecar athlete");
longestPalindrome("dad");

// input string
// output string
// constraints none
// Edge cases  none

// iterate
// check if it's palindro
// return the word
