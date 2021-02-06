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

// Wow, what an elegant solution!
// Time: O(n)
// Space: O(1)
var canJump = function(nums) {
  // keep track of the index of the last position
  // we can jump to
  let lastPosition = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    // i is our current jump position
    // nums[i] is how far we can jump from that position
    // if we can at least jump to the last "good" position
    // from our current position, 
    // then update lastPosition to be assigned to
    // our current position
    if (i + nums[i] >= lastPosition) {
      lastPosition = i;
    }
  }

  return lastPosition === 0;
};







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

