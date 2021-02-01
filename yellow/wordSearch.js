/*

Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 200
1 <= word.length <= 103
board and word consists only of lowercase and uppercase English letters.

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Refactored based on video: 
// Assuming we are allowed to mutate the input
// Instead of storing the coordinates of the cells you've visited
// thus far, mark the board cells in some way (e.g., empty space ' ')
// so that you know you've already visited that cell
// You'll need to return the board cell to the original
// character after you're done recursing
var exist = function(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {    
      if (board[row][col] === word[0] && dfs(board, row, col, 0, word)) {
        return true;
      }
    }
  }

  return false;

  function dfs(board, row, col, count, word) {
    if (count === word.length) {
      return true;
    }

    // consolidate boundary checking and character checking to one line
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[count]) {
      return false;
    }

    let temp = board[row][col];
    board[row][col] = ' ';
    let found = dfs(board, row + 1, col, count + 1, word)
      || dfs(board, row - 1, col, count + 1, word)
      || dfs(board, row, col + 1, count + 1, word)
      || dfs(board, row, col - 1, count + 1, word);
    
    board[row][col] = temp;
    return found;
  }
};


// Time: O(n)
// Space: O(n) // worst case, if the word snakes through the entire board
// First attempt
var exist = function(board, word) {
  // I'm not going to be concerned about capitalization for now
  let rows = board.length;
  let cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // word[0] is the first letter of 'word'
      if (board[row][col] === word[0]) {
        // start recursion (DFS)
        if (dfs(row, col, board[row][col])) {
          return true;
        };
      }
    }
  }

  return false;

  function dfs(row, col, string, set = new Set()) {
    // add row,col to set
    set.add(`${row},${col}`);
    
    if (string === word) {
      return true;
    }

    let nextLetter = word[string.length];

    // up
    if (!set.has(`${row - 1},${col}`) && row - 1 >= 0 && board[row - 1][col] === nextLetter) {
      if (dfs(row - 1, col, string + nextLetter, set)) {
        return true;
      };
    }

    // right
    if (!set.has(`${row},${col + 1}`) && col + 1 < cols && board[row][col + 1] === nextLetter) {
      if (dfs(row, col + 1, string + nextLetter, set)) {
        return true;
      };
    }

    // down
    if (!set.has(`${row + 1},${col}`) && row + 1 < rows && board[row + 1][col] === nextLetter) {
      if (dfs(row + 1, col, string + nextLetter, set)) {
        return true;
      };
    }

    // left
    if (!set.has(`${row},${col - 1}`) && col - 1 >= 0 && board[row][col - 1] === nextLetter) {
      if (dfs(row, col - 1, string + nextLetter, set)) {
        return true;
      };
    }

    // remove from set
    set.delete(`${row},${col}`);
  };
};

/*

I: a matrix, m x n, of letters (uppercase and lowercase), AND a word (string)
O: a boolean, representing whether the word (input) exists in the grid
C: 
E: empty matrix, capitalization

*/