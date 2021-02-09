/*

Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

Constraints:

1 <= nums.length <= 2000
-106 <= nums[i] <= 106

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


var findNumberOfLIS = function(nums) {
  // each number is already a subsequence of length 1
  let n = nums.length;
  if (n <= 1) return n;
  let lengths = new Array(n).fill(1);
  let counts = new Array(n).fill(1);
  
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        if (lengths[i] >= lengths[j]) {
          lengths[j] = lengths[i] + 1;
          counts[j] = counts[i];
        } else if (lengths[i] + 1 === lengths[j]) {
          counts[j] += counts[i];  
        }
      }
    }
  }
  
  let longest = 0;
  for (let length of lengths) {
    longest = Math.max(longest, length);
  }
  
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (lengths[i] === longest) {
      result += counts[i];
    }
  }

  return result;
};

// debugger;
// console.log(findNumberOfLIS([1,2,4,3,5,4,7,2])); // 3



