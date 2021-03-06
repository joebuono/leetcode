/*

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

*/

/**
 * @param {number} n
 * @return {number}
 */


// Fantastic video explaining Dynamic Programming approach:
// https://www.youtube.com/watch?v=1xfx6M_GqFk&t=142s

// This is amazing. Such a cool solution!
// Time: O(n * Math.sqrt(n))
// Space: O(n)

// Thought: Dynamic programming is basically 
// memoizing the results of subproblems
var numSquares = function(n) {
  // check if the number is a perfect square
  if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) return 1;
  if (n < 4) return n;

  let dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    // Initialize the number of least squares for each integer
    // to the integer itself (the number of 1-squared's)
    dp[i] = i;
    for (let j = 1; j * j <= i; j++) {
      // This is the magic (dynamic programming):
      // j is used to calculate the squares
      // dp[i - j * j] represents the "least squares" value 
      // previously calculated and memoized
      // plus 1 for the operation to get to that number
      dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
    }
  }

  return dp[n];
};

/*

Lagrange's 4-square theorem
*** Every natural number is the sum of four squares ***
- Also known as Bachet's conjecture

So our answer will range from 1-4

*/


// naive recursive solution
var numSquares = function(n) {
  let limit = Math.floor(Math.sqrt(n));
  let squares = [];
  for (let i = 1; i <= limit; i++) {
    squares.push(i * i);
  }
  console.log(squares);

  let leastSquares = Infinity;

  var recurse = function(currentInt, squareCount, index) {
    for (let i = index; i >= 0; i--) {
      let newInt = currentInt - squares[i];
      if (newInt === 0) {
        leastSquares = Math.min(leastSquares, squareCount + 1);
      } else if (newInt > 0) {
        recurse(newInt, squareCount + 1, i);
      }
    }
  };

  recurse(n, 0, squares.length - 1);

  return leastSquares;
};


/*

I: a positive integer
O: an integer representing the least number of perfect squares that sum to n (the input)
C:
E:

12

12 - 9 = 3



*/
