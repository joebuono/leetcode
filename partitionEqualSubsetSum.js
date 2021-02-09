/*

Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */







var canPartition = function(nums) {
  let totalSum = nums.reduce((acc, cur) => acc + cur);
  if (totalSum % 2) return false;
  nums.sort((a, b) => a - b);

  let p1 = totalSum;
  let p2 = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    p1 -= nums[i];
    p2 += nums[i];
    if (p1 === p2) {
      return true;
    }
  }

  return false;
};

// Foiled! [2,2,1,1]


