/*

You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Example 1:


Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
Example 2:

Input: firstList = [[1,3],[5,9]], secondList = []
Output: []
Example 3:

Input: firstList = [], secondList = [[4,8],[10,12]]
Output: []
Example 4:

Input: firstList = [[1,7]], secondList = [[3,10]]
Output: [[3,7]]
 

Constraints:

0 <= firstList.length, secondList.length <= 1000
firstList.length + secondList.length >= 1
0 <= starti < endi <= 109
endi < starti+1
0 <= startj < endj <= 109
endj < startj+1

*/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

// Time: O(m + n)
// Space: O(m + n)
var intervalIntersection = function(firstList, secondList) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    // Let's check if the intervals intersect
    let lo = Math.max(firstList[i][0], secondList[j][0]);
    let hi = Math.min(firstList[i][1], secondList[j][1]);

    if (lo <= hi) {
      result.push([lo, hi]);
    }

    if (firstList[i][1] <= secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};



// Time: O(n^2)
// Space: O(1)
var intervalIntersection = function(firstList, secondList) {
  if (!firstList.length || !secondList.length) return [];
  let result = [];

  for (let i = 0; i < secondList.length; i++) {
    for (let j = 0; j < firstList.length; j++) {
      if (secondList[i][1] >= firstList[j][0]) {
        let start = Math.max(firstList[j][0], secondList[i][0]);
        let end = Math.min(firstList[j][1], secondList[i][1]);
        if (start <= end) {
          result.push([start, end]);
        }
      } else {
        break;
      }
    }
  }

  return result;
};

