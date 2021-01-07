/*

46. Permutations
Medium

5148

122

Add to List

Share
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// What's the time complexity?
// Space: O(n)?
var permute = function(nums) {
  var result = [];
  var options = {};
  for (let i of nums) {
    options[i] = true;
  }

  var recurse = function(perm) {
    for (let i = 0; i < nums.length; i++) {
      if (options[nums[i]]) {
        options[nums[i]] = false;
        perm.push(nums[i]);
        if (perm.length === nums.length) {
          result.push([...perm]);
        } else {
          recurse(perm);
        }
        perm.pop();
        options[nums[i]] = true;
      }
    }
  }

  recurse([]);
  return result;
};

