/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Example 3:

Input: m = 7, n = 3
Output: 28
Example 4:

Input: m = 3, n = 3
Output: 6
 

Constraints:

1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 109.

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (!m || !n) return 0;

  // initialize a matrix where the first row is all 1's
  // and the first column is all 1's
  let dp = [new Array(n).fill(1)];
  let emptyRow = new Array(n);
  emptyRow[0] = 1;
  for (let row = 0; row < m - 1; row++) {
    dp.push([...emptyRow]);
  }

  // each position in the matrix will store the number 
  // of ways that the robot can reach that position
  // for each position in the dp matrix, set it equal to the
  // sum of the position above it and to the left of it,
  // since the robot can only come from the top or left
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] = dp[row][col - 1] + dp[row - 1][col];
    }
  }

  return dp[m - 1][n - 1];
};

