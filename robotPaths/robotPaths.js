/*
Robot Paths

A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
The robot can move either up, down, left, or right, but cannot visit the same spot twice. 
How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)

Example: 

robotPaths(1) // 1
robotPaths(2) // 2
robotPaths(3) // 12

*/

// Helpers

// OICE
// Input:number OF rows & cols
// output: numbero of solutoin
// Constraints: none
// Edge cases: none
function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
}
let board = new makeBoard(5);
board.togglePiece(4, 4);
console.log(board);
function robotPaths(n) {
  // Naive solution
  // start with
  // RECURSIVE APPRAOCH
  // USING BACKTRACKING
  // goal is to reach [board.length - 1][board.length - 1] => last buttom right corner
  // each time I would like to discover path in different directoin (up down left right )
  // each time check from current position up down left right if they are visited before
  // if there is no way out return
  function robotPathsHelper(n, solution = 0) {
    let goal = board[n - 1][n - 1];
    if (current === goal) {
      return solution++;
    }
    // check left
  }
  return robotPathsHelper(n, solution);
}
