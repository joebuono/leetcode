/*

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let max = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) { 
      // convert string to int
      matrix[i][j] = +matrix[i][j];

      if (matrix[i][j] === 1) {
        // if it's not in either the first row or first column
        if (i && j) {
          // set to minimum value of up, left, and diagonal, plus one
          matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;          
        }

        max = Math.max(max, matrix[i][j]);
      }
    }
  }
  
  return max * max;
};

