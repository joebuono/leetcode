/*

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {string[][]}
 */


// Dynamic programming
var partition = function(s) {
  // WOW!! https://www.youtube.com/watch?v=lDYIvtBVmgo
};


// Backtracking + Memoization
// Time: O(n * 2^n
// Space: ?
var partition = function(s) {
  let subproblems = {};

  let allPartitions = [];

  let recurse = function(partition = [], start = 0) {
    if (start === s.length) {
      allPartitions.push([...partition]);
    }
    for (let end = start; end < s.length; end++) {
      // memoization
      if (subproblems[`${start},${end + 1}`] !== undefined) {
        if (subproblems[`${start},${end + 1}`]) {
          partition.push(subproblems[`${start},${end + 1}`]);
          recurse(partition, end + 1);
          partition.pop();
        }
      } else {
        let substring = s.slice(start, end + 1);
        if (isPal(substring)) {
          subproblems[`${start},${end + 1}`] = substring;
          partition.push(substring);
          recurse(partition, end + 1);
          partition.pop();
        } else {
          subproblems[`${start},${end + 1}`] = false;
        }
      }
    }
  }

  recurse();

  return allPartitions;

  function isPal(s) {
    let i = 0; 
    let j = s.length - 1;
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    
    return true;
  }
};


// Time: O(n * 2^n)
// Space: O(n) because of the recursive stack (at most equivalent to n)
var partition = function(s) {
  let allPartitions = [];

  let recurse = function(partition = [], start = 0) {
    if (start === s.length) {
      allPartitions.push([...partition]);
      return;
    }
    for (let end = start; end < s.length; end++) {
      let substring = s.slice(start, end + 1);
      if (isPal(substring)) {
        partition.push(substring);
        recurse(partition, end + 1);
        partition.pop();
      }
    }
  };

  recurse();

  return allPartitions;

  function isPal(s) {
    let i = 0; 
    let j = s.length - 1;
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    
    return true;
  }
};

/*

I: a string
O: an array of arrays of strings, each string being a palindrome
  partitioned from the input string
C: 
E: 

*/