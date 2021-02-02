/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

*/

/**
 * @param {number} n
 * @return {string[]}
 */

// This is such an elegant solution from Nick White
// Time and Space? 2^n?
var generateParenthesis = function(n) {
  let allCombos = [];
  backtrack('', 0, 0);
  return allCombos;

  function backtrack(combo, open, closed) {
    if (combo.length === n * 2) {
      allCombos.push(combo);
    }
    if (open < n) {
      backtrack(combo + '(', open + 1, closed);
    }
    if (closed < open) {
      backtrack(combo + ')', open, closed + 1);
    }
  };
};
