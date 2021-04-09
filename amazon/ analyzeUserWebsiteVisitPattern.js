/*

We are given some website visits: the user with name username[i] visited the website website[i] at time timestamp[i].

A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  (The websites in a 3-sequence are not necessarily distinct.)

Find the 3-sequence visited by the largest number of users. If there is more than one solution, return the lexicographically smallest such 3-sequence.

*/

/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */

var mostVisitedPattern = function(username, timestamp, website) {
  const userData = {};

  for (let i = 0; i < username.length; i++) {
    if (!userData[username[i]]) userData[username[i]] = [];
    userData[username[i]].push([timestamp[i], website[i]]);
  }

  // sort by timestamp
  for (let user in userData) {
    userData[user].sort((a, b) => a[0] - b[0]);
  }

  const totalSequences = {};

  // for each user, create a set of their 3-sequences
  for (let user in userData) {
    const sequences = new Set();

    const permute = function(arr, perm, index) {
      if (perm.length === 3) {
        sequences.add(perm);
        return;
      }

      for (let i = index; i < arr.length; i++) {
        let copy = [...perm];
        copy.push(arr[i][1]);
        permute(arr, copy, i + 1);
      }
    };

    permute(userData[user], [], 0);

    sequences.forEach(seq => {
      totalSequences[seq] = ++totalSequences[seq] || 1;
    });
  }

  const entries = Object.entries(totalSequences);
  
  let max = 0;
  let result = null;
  
  for (let entry of entries) {
    if (entry[1] >= max) {
      max = entry[1];
      if (!result || entry[0] < result) {
        result = entry[0];
      }
    }
  }

  return result.split(',');
};
