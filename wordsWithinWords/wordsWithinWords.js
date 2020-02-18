/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

// input: array 
// Output: string 
// Edge case: none
// Constraints: none
function nestedWordCount(words) {
  // Remember Adam dont complicate things
  // declare  an object

  let wordsObj = {};
  // iterate  i => words  
  for (let word of words) {
    // iterate   j=> words
    for (let word1 of words) {
      // check if a word is including on a word
      if (word1.includes(word) && word !== word1) {
        // check if it's stored on the object
        if (wordsObj[word]) {
          wordsObj[word]++
          // create it 
        } else {
          wordsObj[word] = 1
        }
      }
    }
  }
  for (let key in wordsObj) {
    var result = 0;
    console.log(key)
    if (key.length > result) {
      result = key
    }
  }
  return result
}
console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays"]))