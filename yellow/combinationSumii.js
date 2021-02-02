/*

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);

  let allCombos = [];

  let recurse = function(combo = [], remaining = target, index = 0) {
    if (remaining === 0) {
      allCombos.push([...combo]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      // this is the line which distinguishes combination sum ii
      // from the original combination sum problem
      if (i !== index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (remaining - candidates[i] >= 0) {
        combo.push(candidates[i]);
        recurse(combo, remaining - candidates[i], i + 1);
        combo.pop();
      }
    }
  };

  recurse();
  return allCombos;
};

