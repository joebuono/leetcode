/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

// Time: O(n)
// Space: O(n)
var isValid = function(s) {
  var brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  var stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== brackets[s[i]]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return !stack.length;
};

/*

Basically, you want to use a stack. 


*/