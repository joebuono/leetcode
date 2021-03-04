/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 

Follow up: The overall run time complexity should be O(log (m+n)).


*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


// Time: O(log n) - O(log (min(m, n)))
// Space: O(1)

// To solve this problem, we need to understand "What is the use of median". In statistics, the median is used for:
// Dividing a set into two equal length subsets, that one subset is always greater than the other.

var findMedianSortedArrays = function(nums1, nums2) {
  // make sure nums1.length <= nums.length
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  // binary search on nums1
  let i = 0;
  let j = nums1.length;

  while (i <= j) {
    // figure out where to partition nums1
    let firstPartition = Math.floor((i + j) / 2);

    // figure out where to partition nums2 based on nums1 partition
    let secondPartition = Math.floor((nums1.length + nums2.length + 1) / 2) - firstPartition;

    // handle edge cases if we've arrived at the start/end of either array
    let maxLeftNums1 = firstPartition === 0 ? Number.MIN_SAFE_INTEGER : nums1[firstPartition - 1];
    let minRightNums1 = firstPartition === nums1.length ? Number.MAX_SAFE_INTEGER : nums1[firstPartition];
    let maxLeftNums2 = secondPartition === 0 ? Number.MIN_SAFE_INTEGER : nums2[secondPartition - 1];
    let minRightNums2 = secondPartition === nums2.length ? Number.MAX_SAFE_INTEGER : nums2[secondPartition];

    // check if we've found the median point
    if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
      // check if combined length is even or odd
      if ((nums1.length + nums2.length) % 2) {
        // odd case
        return Math.max(maxLeftNums1, maxLeftNums2);
      }
      // even case
      return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2;
    } else if (maxLeftNums1 > minRightNums2) {
      // move nums1 to left
      j = firstPartition - 1;
    } else {
      // move nums1 to right
      i = firstPartition + 1;
    }
  }
};

// let arr1 = [1, 3, 8, 9, 15];
// let arr2 = [7, 11, 18, 19, 21, 25];
// debugger;
// console.log(findMedianSortedArrays(arr1, arr2));

