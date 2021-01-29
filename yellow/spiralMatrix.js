/*

Given an m x n matrix, return all elements of the matrix in spiral order.
Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// This almost works
// Basically, you're just keeping track of the boundaries and moving them inwards
var spiralOrder = function(matrix) {
  let result = [];
  if (!matrix.length) return result;

  let left = 0;
  let right = matrix.length - 1;
  let top = 0;
  let bottom = matrix[0].length - 1; // make sure it's the length of the first row

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++; 
  }
  
  return result;
};


// This almost works
var spiralOrder = function(matrix) {
  let result = [];
  if (!matrix.length) return result;

  let left = 0;
  let right = matrix.length - 1;
  let top = 1;
  let bottom = matrix.length - 1;

  let row = 0;
  let col = 0;
  let matrixSize = matrix.length * matrix[0].length;

  while (result.length < matrixSize) {
    // move right
    while (col < right) {
      result.push(matrix[row][col]);
      col++;
    }
    right -= 1;

    // move down
    while (row < bottom) {
      result.push(matrix[row][col]);
      row++;
    }
    bottom -= 1;

    // move left
    while (col > left) {
      result.push(matrix[row][col]);
      col--;
    }
    left++;
    
    // move up
    while (row > top) {
      result.push(matrix[row][col]);
      row--;
    }
    top++;
  }

  return result;
};

