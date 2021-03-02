/*

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Note:

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.



*/


// Sort
// One pointer on the first item, another pointer on the second item
// Compare first item's end time (fiet) with second item's start time (sist)
// If fiet > sist, increment remove counter
// Else, first pointer = second pointer

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => {
    if (a[0] - b[0] !== 0) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  
  let left = 0;
  let right = 1;
  let removeCount = 0;

  while (right < intervals.length) {
    if (intervals[left][1] <= intervals[right][0]) {
      left = right;
    } else if (intervals[left][1] < intervals[right][1]) {
      removeCount++;
    } else {
      left = right;
      removeCount++;
    }
    right++;
  }

  return removeCount;
};

