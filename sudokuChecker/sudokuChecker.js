/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
 896275314\n
 214963857\n
 589427163\n
 362189745\n
 471356982\n
 923541678\n
 648792531\n
 157638429"
*/
//input string
//output sting
//constants none
//edge cases none

//split the board 2d array
const stringBoard = "157638449";
// //\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";

function sudokuChecker(stringBoard) {
  let sudokuObj = {};
  let result = "solved";
  let board = stringBoard.split("");
  for (let i = 0; i < board.length; i++) {
    if (sudokuObj[board[i]]) {
      result = "invalid";
      console.log(result);
      return result;
    }
    sudokuObj[board[i]] = [board[i]];
  }
  console.log(result);
  return result;
}
sudokuChecker(stringBoard);
