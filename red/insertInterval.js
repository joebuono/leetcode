/*

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals is sorted by intervals[i][0] in ascending order.
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */



// Almost works, except for some edge cases (like [0,0])
var insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval];

  let result = [];
  let foundStart = false;
  let foundEnd = false;

  for (let i = 0; i < intervals.length; i++) {
    if (!foundStart) {
      if (intervals[i][1] >= newInterval[0]) {
        foundStart = true;
        let start = Math.min(intervals[i][0], newInterval[0]);
        let end = Math.max(intervals[i][1], newInterval[1]);
        result.push([start, end]);
      } else {
        result.push(intervals[i]);
      }
    } else if (!foundEnd) {
      if (intervals[i][1] > result[result.length - 1][1]) {
        if (intervals[i][0] <= result[result.length - 1][1]) {
          result[result.length - 1][1] = intervals[i][1];
        } else {
          result.push(intervals[i]);
        }
      }
    } else {
      result.push(intervals[i]);
    }
  }

  if (!foundStart) {
    result.push(newInterval);
  }

  return result;
};



var insert = function(intervals, newInterval) {
  let result = [];
  for (let interval of intervals) {
    if (interval[1] < newInterval[0]) {
      result.push(interval);
    } else if (newInterval[1] < interval[0]) {
      result.push(newInterval);
      newInterval = interval;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.min(newInterval[1], interval[1]);
    }
  }

  result.push(newInterval);
  return result;
};