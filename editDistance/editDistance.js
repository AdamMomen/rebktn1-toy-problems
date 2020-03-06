/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert the first string into the second string,
given that the only operations can be insertion, deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1
editDistance("wednesday", "sunday") // 5
/
// remove wed  -> nesday
// change e => u  nesday => nusday
// repace s with n sundat
editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/

function editDistance(str1, str2) {
  // if  one of the strings is empty
  // return the others's length
  // fill the first columan and row with same indices
  // if the  chars  @ i and j equals to eachotehr
  // push index @ i-1 & j-1
  // fill the how are

  // Time Complexity O(n^2)
  let board = [],
    i,
    j;
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  for (i = 0; i <= str2.length; i++) {
    board[i] = [i];
  }
  for (j = 0; j <= str1.length; j++) {
    board[0][j] = j;
  }
  for (i = 1; i <= str2.length; i++) {
    for (j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        board[i][j] = board[i - 1][j - 1];
      } else {
        board[i][j] = Math.min(
          board[i - 1][j - 1] + 1, // diagonal
          board[i][j - 1] + 1, // left
          board[i - 1][j] + 1 // right
        );
      }
    }
  }
  return board[str2.length][str1.length];
}

console.log(editDistance("hackerrank", "hackreactor"));
