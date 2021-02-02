/*

You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:

Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
 

Constraints:

The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.

*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// The elegant solution is a variation on the 0/1 Knapsack Problem
var findTargetSumWays = function(nums, S) {
  // Figure out the dynamic programming solution
};


// Brute Force Solution
// Time: O(2^n)
// Space: O(n), worst case depth of the call stack
var findTargetSumWays = function(nums, S) {
  var totalWays = 0;
    
  var recurse = function(sum = 0, index = 0) {
    if (index === nums.length) {
      if (sum === S) {
        totalWays++;
      }
      return;
    }

    recurse(sum + nums[index], index + 1);
    recurse(sum + (nums[index] * -1), index + 1);
  };

  recurse();

  return totalWays;
};

/*

I: an array of non-negative integers, an integer representing the target sum
O: an integer, representing the number of ways you can assign + and -
  to each integer in the input array so that their sum equals the target sum
C: 
E: zero?

*/

