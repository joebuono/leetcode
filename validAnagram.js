/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let obj = {};
  for (let i of s) {
    obj[i] = ++obj[i] || 1;
  }

  for (let i of t) {
    if (obj[i] !== undefined) {
      obj[i]--;
    } else {
      return false;
    }
  }

  for (let char in obj) {
    if (obj[char] !== 0) {
      return false;
    }
  }

  return true;
};


