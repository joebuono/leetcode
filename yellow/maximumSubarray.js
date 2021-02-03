/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's Algorithm
// Time: O(n)
// Space: O(n)
// Is there a way to optimize this?
// The solution below from 1/21/21 is better! Constant space!
var maxSubArray = function(nums) {
  let dynamic = new Array(nums.length);
  dynamic[0] = nums[0];

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dynamic[i] = Math.max(nums[i], nums[i] + dynamic[i - 1]);
    if (dynamic[i] > max) {
        max = dynamic[i];
    }
  }

  return max;
};


// 1/21/21
// Kadane's Algorithm?
var maxSubArray = function(nums) {
  let globalMax = nums[0];
  let localMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    globalMax = Math.max(globalMax, localMax);
  }

  return globalMax;
};
