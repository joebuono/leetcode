/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // first, sort the array
  nums.sort((a,b) => a - b);

  var result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // this line also accounts for duplicates
    if (i === 0 || nums[i] !== nums[i - 1]) {

      // this is essentially an implementation of the two-pointer approach to twoSum
      var low = i + 1;
      var high = nums.length - 1;
      var sum = nums[i] * -1;
  
      while (low < high) {
        let tempSum = nums[low] + nums[high];
        if (tempSum === sum) {
          result.push([nums[i], nums[low], nums[high]]);
          // accounts for duplicates
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (tempSum > sum) {
          high--;
        } else {
          low++;
        }
      }
    }     
  }

  return result;
};

/*

Let's try sorting it first

[-1,0,1,2,-1,-4]

[-4, -1, -1, 0, 1, 2]

[-8, 3, 4, 4, 5]


*/
