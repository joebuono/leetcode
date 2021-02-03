/*

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up:

Could you come up with the O(n2) solution?
Could you improve it to O(n log(n)) time complexity?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


// HOLY SHIT
// Patience Sort Algorithm
// https://www.youtube.com/watch?v=22s1xxRvy28&feature=emb_logo
// It's solitaire!
var lengthOfLIS = function(nums) {

};

/*
Patience Sort (think Solitaire):
[0,1,0,3,2,3]

0 1 3 3 // four "piles"
  0 2

[3, 4, -1, 0, 6, 2, 3]

 3  4  6  3
-1  0  2

[7, 7, 7, 7, 7]

7
7
7
7
7

[10,9,2,5,3,7,101,18]

10  5  7 101
9   3    18
2

*/


// Wow
// https://www.youtube.com/watch?v=CE2b_-XfVDk
// Time: O(n^2)
// Space: O(n)
var lengthOfLIS = function(nums) {
  let dp = new Array(nums.length).fill(1); // each number is a subsequence length of 1
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[dp.length - 1];
};

// [3, 4, -1, 0, 6, 2, 3]; 
// 4


/*

I: an array of integers
O: the length of the longest strictly increasing subsequence
C: Can you do O(n^2), or O(n logn)?
E: 


What do we need to keep track of?

- longestSubsequenceGlobal
- longestSubsequenceCurrent
- minimum starting value for a subsequence

*/