/*

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 3 * 104
0 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */






// Time: O(n^2)
// Space: O(n)
var canJump = function(nums) {
  let dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j < i + nums[i]) {
      dp[i] = 1;
    }
  }

  return dp[dp.length - 1];
};

