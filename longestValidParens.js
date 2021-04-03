/*

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.

*/



/**
 * @param {string} s
 * @return {number}
 */

// Time: O(n)
// Space: O(1)
 var longestValidParentheses = function(s) {
  let open = 0;
  let closed = 0;
  let max = 0;

  // scan left to right
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open++;
    } else {
      closed++;
    }
    if (open === closed) {
      max = Math.max(max, open * 2);
    } else if (closed > open) {
      open = closed = 0;
    }
  }
  
  open = closed = 0;
  
  // scan left to right
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      open++;
    } else {
      closed++;
    }
    if (open === closed) {
      max = Math.max(max, closed * 2);
    } else if (open > closed) {
      open = closed = 0;
    }
  }

  return max;
};



// shots in the dark
var longestValidParentheses = function(s) {
  let longest = 0;
  let start = 0;
  let open = 0;
  let closed = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open++;
    } else if (open > 0) {
      open--;
      if (open === 0 && closed === 0) {
        longest = Math.max(longest, i - start + 1);
      }
    } else {
      start = i + 1;
      open = 0;
      closed = 0;
    }
  }
  
  return longest;
};