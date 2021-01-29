/*

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [1,1]
Output: 1
Example 4:

Input: nums = [1,1,2]
Output: 1
 

Constraints:

2 <= n <= 3 * 104
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


// The obvious solutions are to either sort, or to use a set (or hash table)
// The advanced solution is Floyd's Tortoise and Hare (Cycle Detection)
// This is a crazy clever solution!! Who has this intuition?
var findDuplicate = function(nums) {
  var slow = nums[0];
  var fast = nums[0];

  // phase one
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  // phase two
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// [3,1,3,4,2]
