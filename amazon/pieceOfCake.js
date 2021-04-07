/*

Given a rectangular cake with height h and width w, and two arrays of integers horizontalCuts and verticalCuts where horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a huge number, return this modulo 10^9 + 7.

*/

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  // divide h and w into segments, find biggest segment
  var maxHeight = findLargestCut(h, horizontalCuts);
  var maxWidth = findLargestCut(w, verticalCuts);

  return (maxHeight * maxWidth) % ((10 ** 9) + 7);
};

var findLargestCut = function(length, cutsArr) {
  // sorting is necessary
  cutsArr.sort((a, b) => a - b);

  // calculate max of first and last slices
  let max = Math.max(cutsArr[0], length - cutsArr[cutsArr.length - 1]);
  
  // calculate max of inner slices
  for (let i = 1; i < cutsArr.length; i++) {
    max = Math.max(max, cutsArr[i] - cutsArr[i - 1]);
  }
  
  return max;
};
