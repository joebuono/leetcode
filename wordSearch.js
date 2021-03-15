/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Note: There will be some test cases with a board or a word larger than constraints to test if your solution is using pruning.


*/




var exist = function(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        board[row][col] = -1;
        if (dfs(row, col, word, board, visited)) {
          return true;
        }
        board[row][col] = word[0];
      }
    }
  }

  return false;
};


let DIRECTIONS = [[1,0],[0,1],[-1,0],[0,-1]];


// Re-write this iteratively
var dfs = function(row, col, word, board, visited, index = 1) {
  if (index === word.length) return true;

  board[row][col] = -1;

  for (let [r, c] of DIRECTIONS) {
    r += row;
    c += col;

    // ADD AND REMOVE FROM THE SET
    // check valid
    if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && board[r][c] === word[index] && !visited.has(`${r},${c}`)) {
      // Make sure you remember to return the recursive call!
      return dfs(r, c, word, board, visited, index + 1);
    }
  }

  board[row][col] = word[0];
};