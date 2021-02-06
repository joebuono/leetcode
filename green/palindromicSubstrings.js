/*

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.

*/

/**
 * @param {string} s
 * @return {number}
 */

// The LeetCode article for this problem is exceptional,
// especially the "Further Thoughts" section
// Time: O(n^2)
// Space: O(1)
var countSubstrings = function(s) {
  let count = 0;

  // expand from center
  for (let i = 0; i < s.length; i++) {
    isPal(i, i);      // odd-length
    isPal(i, i + 1);  // even-length
  }

  return count;
    
  function isPal(start, end) {
    while (s[start] === s[end] && start >= 0 && end < s.length) {
      count++;
      start--;
      end++;
    }
  }
};

