/*

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Once again, sorting or using a hash map would be easy
// This solution is bananas!
// It's a trick. The input nums are betwee 1 <= a[i] <= n
// when n is the size of the array
// Basically, your modifying the indexes that correspond
// to the current value
// If you modify the same index twice (we know this by
// make the index negative), then it's a duplicate
var findDuplicates = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let indexToModify = Math.abs(nums[i]) - 1;
    if (nums[indexToModify] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[indexToModify] *= -1;
    }
  }
  return result;
};

// [4,3,2,7,8,2,3,1]