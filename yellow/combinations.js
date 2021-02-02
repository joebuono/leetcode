/*

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let options = new Array(n + 1).fill(true);
  let combos = [];
  let currentCombo = [];

  var recurse = function(index = 1) {
    if (currentCombo.length === k) {
      combos.push([...currentCombo]);
      return;
    }
    for (let i = index; i < options.length; i++) {
      if (options[i]) {
        options[i] = false;
        currentCombo.push(i);
        recurse(i + 1);
        currentCombo.pop();
        options[i] = true;
      }
    }
  };

  recurse();

  return combos;
};
