/*

You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the i-th job, you have to finish all the jobs j where 0 <= j < i).

You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done in that day.

Given an array of integers jobDifficulty and an integer d. The difficulty of the i-th job is jobDifficulty[i].

Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

*/

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */


 // Elegant DP solution
 // https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/discuss/944828/Short-DP-solution-with-highly-detailed-step-by-step-explanation



// Rough first attempt
 var minDifficulty = function(jobDifficulty, d) {
  if (d > jobDifficulty.length) return -1;

  const windowSize = jobDifficulty - (d - 1);
  let indexOfMax = 0;
  let max = jobDifficulty[0];
  for (let i = 1; i < jobDifficulty.length; i++) {
    if (jobDifficulty[i] > max) {
      max = jobDifficulty[i];
      indexOfMax = i;
    }
  }

  // we don't want the start or end indices to be out of bounds
  let start = Math.max(0, indexOfMax - windowSize + 1);
  let end = Math.min(jobDifficulty.length, start + windowSize - 1);
  
  let maxSum = windowSum;
  let indices = [start, end];
  let windowSum = 0;
  for (let i = start; i <= end; i++) {
    windowSum += jobDifficulty[i];
  }

  while (start < indexOfMax && end < jobDifficulty.length - 1) {
    windowSum -= jobDifficulty[start++];
    windowSum += jobDifficulty[end++];
    if (windowSum > maxSum) {
      maxSum = windowSum;
      indices = [start, end];
    }
  }

  let remainingDays = 0;

  for (let i = 0; i < jobDifficulty.length; i++) {
    if (i < indices[0] && i > indices[end]) {
      remainingDays += jobDifficulty[i];
    }
  }

  return remainingDays + max; 

  // find the max length a window can be such that it leaves exactly d - 1 days left. For example:
  // arrLength = 8;
  // d = 6;
  // 8 - (6 - 1) = 3
  // The max length for the window is 3

  // find the largest integer (most difficult task)
  // from that point, find a window of length maxLength with the largest sum
  // sum the remaining days that were not included in the window
};


