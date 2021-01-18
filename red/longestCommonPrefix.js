/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// This is not the most efficient solution
// Explore the Trie data structure
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let word = strs[i];
    if (word.length < prefix.length) {
      prefix = prefix.slice(0, word.length);
    }
    for (let char = 0; char < word.length; char++) {
      if (word[char] !== prefix[char]) {
        prefix = prefix.slice(0, char);
        break;
      }
    }
  }

  return prefix;
};
