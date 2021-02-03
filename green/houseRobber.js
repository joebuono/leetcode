/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 400


*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // edge cases
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxThusFar = new Array(nums.length);
  maxThusFar[0] = nums[0];
  maxThusFar[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // at each step, you're taking the maximum of eithe rthe previously stored max, 
    // OR the value of the current house PLUS the value stored a SKIP backwards
    maxThusFar[i] = Math.max(maxThusFar[i - 1], nums[i] + maxThusFar[i - 2]);
  }

  return maxThusFar[maxThusFar.length - 1];
};


/*

I'm thinking dynamic programming...

We want to calculate the "best so far" at every point

[50,7,9,50,1,50]

[50, 7, 9]

[50, 50, 59, ]

Math.max(previous, current + skipBack)

*/

// 2/2/21
var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[nums.length - 1];
};

