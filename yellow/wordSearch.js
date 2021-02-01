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
var exist = function(board, word) {
  // I'm not going to be concerned about capitalization for now

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // word[0] is the first letter of 'word'
      if (board[row][col] === word[0]) {
        // start recursion (DFS?)
        if (recurse(row, col, board[row][col])) {
          return true;
        };
      }
    }

    return false;
  }

  function recurse(row, col, string, set = new Set()) {
    // add row,col to set
    set.add(`${row},${col}`);
    
    if (string === word) {
      return true;
    }

    let nextLetter = word[string.length];

    // up
    if (!set.has(`${row - 1},${col}`) && board[row - 1] && board[row - 1][col] === nextLetter) {
      if (recurse(row - 1, col, string + nextLetter)) {
        return true;
      };
    }

    // right
    if (!set.has(`${row},${col + 1}`) && board[col + 1] && board[row][col + 1] === nextLetter) {
      if (recurse(row, col + 1, string + nextLetter)) {
        return true;
      };
    }

    // down
    if (!set.has(`${row + 1},${col}`) && board[row + 1] && board[row + 1][col] === nextLetter) {
      if (recurse(row + 1, col, string + nextLetter)) {
        return true;
      };
    }

    // left
    if (!set.has(`${row},${col - 1}`) && board[col - 1] && board[row][col - 1] === nextLetter) {
      if (recurse(row, col - 1, string + nextLetter)) {
        return true;
      };
    }
  };
};

/*

I: a matrix, m x n, of letters (uppercase and lowercase), AND a word (string)
O: a boolean, representing whether the word (input) exists in the grid
C: 
E: empty matrix, capitalization

*/