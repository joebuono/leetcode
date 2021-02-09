/*

Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:

Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 

Note:

1 <= k <= len(nums) <= 16.
0 < nums[i] < 10000.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  let totalSum = nums.reduce((a, b) => a + b);
  let subSetSum = totalSum / k;

  // totalSum must be evenly divisible into whole numbers
  if (subSetSum !== Math.floor(subSetSum)) return false;

  let memo = {};

  return recurse(0, 0);

  function recurse(index, sumThusFar) {
    // if index is already in hash table, skip it

    if (index >= nums.length) {
      return false;
    }

    let newSum = sumThusFar + nums[i];
    if (newSum < subSetSum) {
      recurse(index + 1);
    }
  }
};

