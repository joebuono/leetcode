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



// Memoized recursion (avoid solving the same subproblem more than once)
// Time: O(n * m), n is the length of nums, m is the totalSum / 2
// Space: O(n), call stack worst case
var canPartition = function(nums) {
  if (nums.length <= 1) return false;
  const totalSum = nums.reduce((a, b) => a + b);
  if (totalSum % 2) return false;
  let memo = {};

  return recurse(0, 0);

  function recurse(index, sumThusFar) {
    // check if the result of current index and sumThusFar has been memoized
    if (memo[`${index},${sumThusFar}`] !== undefined) {
      return memo[`${index},${sumThusFar}`];
    }

    // we only need to find a subset of elements which sum to
    // HALF of the total sum
    if (sumThusFar * 2 === totalSum) {
      return true;
    }

    if (sumThusFar * 2 > totalSum || index >= nums.length) {
      return false;
    }

    // simulate 'taking' and 'leaving' each element
    let result = recurse(index + 1, sumThusFar + nums[index]) || recurse(index + 1, sumThusFar);
    
    // add result to memo
    memo[`${index},${sumThusFar}`] = result;

    return result;
  }
};









// Naive half-solution that still fails
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


