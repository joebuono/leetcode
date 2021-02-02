/*

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let allPerms = [];
  let options = {};
  // we want to keep track of how many of each number we have available
  for (let num of nums) {
    options[num] = ++options[num] || 1;
  }

  // I think it's cool how we keep track of perm outside of the permute function
  let perm = [];

  var permute = function() {
    if (perm.length === nums.length) {
      allPerms.push([...perm]);
      return;
    }

    for (let num in options) {
      if (options[num] > 0) {
        options[num]--;
        perm.push(+num);
        permute();
        perm.pop();
        options[num]++;
      }
    }
  };

  permute();
  return allPerms;
};


