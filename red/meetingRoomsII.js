/*

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
 

Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106


/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  // edge case
  if (!intervals || !intervals.length) return 0;

  // separate out start and end times, and sort them individually
  let startTimes = [];
  let endTimes = [];
  for (let i = 0; i < intervals.length; i++) {
    startTimes.push(intervals[i][0]);
    endTimes.push(intervals[i][1]);
  }

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  // count used rooms
  let usedRooms = 0;

  // Two-pointer approach (draw this out if you need to review)
  let startPointer = 0;
  let endPointer = 0;

  while (startPointer < intervals.length) {
    if (startTimes[startPointer] < endTimes[endPointer]) {
      usedRooms++;
      startPointer++;
    } else {
      startPointer++;
      endPointer++;
    }
  }

  return usedRooms;
};