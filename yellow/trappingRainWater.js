/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

*/

/**
 * @param {number[]} height
 * @return {number}
 */

// Two-pointers
// Time: O(n)
// Space: O(1)

// There's also an O(n) space dp solution, but this solution is better
var trap = function(height) {
  // declare totalWater variable
  let totalWater = 0;

  // declare leftMax and rightMax variables, initialize to start and end heights
  let leftMax = height[0];
  let rightMax = height[height.length - 1];

  // declare two pointers, left and right
  let left = 0;
  let right = height.length - 1;

  // while left pointer < right pointer
  while (left < right) {
    // update max heights
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    // find minimum of two heights
    let min = Math.min(leftMax, rightMax);

    // calculate the difference between the lower of the two heights and the min
    if (height[left] < height[right]) {
      totalWater += min - height[left];
      left++;
    } else {
      totalWater += min - height[right];
      right--;
    }
  }

  return totalWater;
};

