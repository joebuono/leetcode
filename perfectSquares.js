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
var numSquares = function(n) {
  let limit = Math.floor(Math.sqrt(n));
  let squares = [];
  for (let i = 1; i <= limit; i++) {
    squares.push(i * i);
  }
  console.log(squares);

  let leastSquares = Infinity;

  var recurse = function(total, index) {
    for (let i = index; i < squares.length; i++) {
      
    }
  };

  recurse(0, 0);

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
