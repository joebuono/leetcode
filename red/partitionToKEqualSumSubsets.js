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

// https://www.youtube.com/watch?v=qpgqhp_9d1s&t=18s
var canPartitionKSubsets = function(nums, k) {
  let totalSum = nums.reduce((a, b) => a + b);
  if (k === 0 || totalSum % k !== 0) return false;
  return canPartition(0, nums, k, new Array(nums.length), 0, totalSum / k);

  function canPartition(startIndex, numArr, k, used, inProgressBucketSum, targetBucketSum) {
    // if there is only one bucket left to fill, then we know we'll be able to fill it
    if (k === 1) return true;

    // if we've finished filling a bucket
    if (inProgressBucketSum === targetBucketSum) {
      // we subtract 1 from k because we just filled a bucket
      return canPartition(0, numArr, k - 1, used, 0, targetBucketSum);
    }

    // don't continue adding items to the bucket if you've
    // already exceeded capacity (targetBucketSum)
    if (inProgressBucketSum > targetBucketSum) {
      return false;
    }

    // try putting items in bucket
    for (let i = startIndex; i < numArr.length; i++) {
      if (!used[i]) {
        // toggle that we're using the i'th number in the array
        used[i] = true;
        // notice we're adding the current number to our inProgressBucketSum
        if (canPartition(i, numArr, k, used, inProgressBucketSum + numArr[i], targetBucketSum)) {
          return true;
        } else if (i === 0) { 
          // if we can't fill a bucket starting from the first number,
          // then there can be no solutions
          return false;
        }
        // toggle off i'th item
        used[i] = false;
      }
    }

    return false;
  }
};








// First attempt, reasonably close
var canPartitionKSubsets = function(nums, k) {
  let totalSum = nums.reduce((a, b) => a + b);

  // totalSum must be evenly divisible into whole numbers
  if (k === 0 || totalSum % k !== 0) return false;

  let subSetSum = totalSum / k;

  let memo = new Set();

  return recurse(0, 0, 0);

  function recurse(index, sumThusFar, subsetsFound) {
    // if index is already in hash table, skip it

    if (sumThusFar === subSetSum) {
      subsetsFound++;
      if (subsetsFound === k - 1) {
        return true;
      } else {
        return recurse(0, 0, subsetsFound);
      }
    }

    if (index >= nums.length) {
      return false;
    }

    if (memo.has(index)) {
      // skip current index
      recurse(index + 1, sumThusFar, subsetsFound);
    }

    let newSum = sumThusFar + nums[i];
    if (newSum <= subSetSum) {
      memo.add(index);
      recurse(index + 1, newSum, subsetsFound);
      memo.delete(index);
    } else {
      recurse(index + 1, sumThusFar, subsetsFound);
    }
  }
};

