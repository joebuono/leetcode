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

// *** Rephrase the problem statement:
// Given an array, cut it into d contiguous subarrays and return the minimum sum of the max of each subarray


var minDifficulty = function(jobDifficulty, d) {
  if (jobDifficulty.length < d) return -1;

  // initialize dp matrix
  const dp = new Array(d + 1).fill(0).map(() => new Array(jobDifficulty.length).fill(-1));

  // recurse, checking every possible way to split the input array
  return dfs(jobDifficulty, d, dp, 0);
};

var dfs = function(jobDifficulty, d, dp, idx) {
  // if there's only 1 day left, return the max of the remaining days
  if (d === 1) {
    let max = 0;
    while (idx < jobDifficulty.length) {
      max = Math.max(max, jobDifficulty[idx++]);
    };
    return max;
  }

  // if we've already calculated the minimum for this day and index, return that memoized result
  if (dp[d][idx] !== -1) return dp[d][idx];

  // THE MEAT
  let max = 0;
  let res = Number.MAX_SAFE_INTEGER;

  for (let i = idx; i < jobDifficulty.length - d + 1; i++) {
    max = Math.max(max, jobDifficulty[i]);
    res = Math.min(res, max + dfs(jobDifficulty, d - 1, dp, i + 1));
  }

  dp[d][idx] = res;
  return res;
};
