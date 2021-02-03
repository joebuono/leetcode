/*

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let globalMax = nums[0];
  let currMaxProduct = nums[0];
  let prevMaxProduct = nums[0];
  let prevMinProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMaxProduct = Math.max(nums[i], prevMaxProduct * nums[i], prevMinProduct * nums[i]);
    globalMax = Math.max(globalMax, currMaxProduct);
    prevMinProduct = Math.min(nums[i], prevMaxProduct * nums[i], prevMinProduct * nums[i]);
    prevMaxProduct = currMaxProduct;
  }

  return globalMax;
};

// [-2, 3, -4]
/*
localMin: -2
localMax: -2
globalMax: -2

localMin: -6
localMax: 3
globalMax: 3

localMin: -6
localMax: -4
globalMax: 24

*/