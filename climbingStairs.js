/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45

*/


/**
 * @param {number} n
 * @return {number}
 */

// Bottom-up approach, Constant Space
// Time: O(n)
// Space: O(1)
var climbStairs = function(n) {
  let ways = [1, 1];

  while (n > 1) {
    let temp = ways[ways.length - 1];
    ways[ways.length - 1] = temp + ways[ways.length - 2];
    ways[ways.length - 2] = temp;
    n--;
  }

  return ways[ways.length - 1];
};


var climbStairs = function(n) {
  if (n === 0 || n === 1) return 1;
  let ways = new Array(n + 1);
  ways[0] = 1;
  ways[1] = 1;

  for (let i = 2; i < ways.length; i++) {
    // Combine the solutions to the subproblems
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[ways.length - 1];
};

// Oh, it's Fibonacci!

