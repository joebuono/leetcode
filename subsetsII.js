/*

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10


*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// Beautiful solution
var subsetsWithDup = function(nums) {
  // First, sort the numbers. This will allow us to check for duplicates
  nums.sort((a, b) => a - b);
  let powerSet = [];

  var permute = function(perm, index) {
    // Push a copy of the perm (due to pass by reference)
    powerSet.push([...perm]);
    for (let i = index; i < nums.length; i++) {
      // If we haven't just started this recursive call
      // and if the element isn't the same as the previous element
      // i !== index is critical
      if (i !== index && nums[i] === nums[i - 1]) {
        continue;   
      }
      // Push before the recursive call, and pop after the recursive call
      perm.push(nums[i]);
      permute(perm, i + 1);
      perm.pop();
    }
  };

  permute([], 0);

  return powerSet;
};

