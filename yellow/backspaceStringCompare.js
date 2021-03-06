/*

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// Solved with two stacks
var backspaceCompare = function(S, T) {
  return stackify(S) === stackify(T);

  function stackify(string) {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== '#') {
        stack.push(string[i]);
      } else if (stack.length) {
        stack.pop();
      }
    }
    return stack.join('');
  }
};

// Space: O(1)
var backspaceCompare = function(S, T) {
  function backspace(string, index) {
    let count = 1;
    while ((count > 0 && index >= 0) || string[index] === '#') {
      if (string[index] === '#') {
        count++;
      } else {
        count--;
      }
      index--;
    }
    return index;
  };

  let i = S.length - 1;
  let j = T.length - 1;

  while (i >= 0 || j >= 0) {
    if (S[i] === '#') i = backspace(S, i - 1);
    if (T[j] === '#') j = backspace(T, j - 1);
    if (i < 0 && j < 0) return true;
    if (i < 0 || j < 0) return false;
    if (S[i] !== T[j]) return false;
    i--;
    j--;
  }

  return true;
};
