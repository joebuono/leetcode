/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // binary search on last column to find row
  let lastCol = matrix[0].length - 1;

  let topRow = 0;
  let bottomRow = matrix.length - 1;

  while (topRow < bottomRow) {
    let middle = Math.floor((topRow + bottomRow) / 2);
    if (target === matrix[middle][lastCol]) {
      return true;
    } else if (target < matrix[middle][lastCol]) {
      bottomRow = middle;
    } else {
      topRow = middle + 1;
    }
  }

  let left = 0;
  let right = lastCol;
  // binary search on row to check if elements exists
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (matrix[topRow][middle] === target) {
      return true;
    } else if (matrix[topRow][middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return matrix[topRow][left] === target;
};

