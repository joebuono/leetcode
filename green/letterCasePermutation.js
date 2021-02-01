/*

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.

Example 1:

Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: S = "3z4"
Output: ["3z4","3Z4"]
Example 3:

Input: S = "12345"
Output: ["12345"]
Example 4:

Input: S = "0"
Output: ["0"]
 

Constraints:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.

*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let allPossiblePerms = [];

  var recursePerms = function(perm, index) {
    if (index === S.length) {
      allPossiblePerms.push(perm);
    } else {
      for (let i = index; i < S.length; i++) {
        // check if S[index] is letter or digit
        // if it's a digit
        if (!isNaN(parseInt(S[index]))) {
          recursePerms(perm + S[index], index + 1);
          return; // the return statements are crucial
        } else { // if it's a letter
          recursePerms(perm + S[index].toLowerCase(), index + 1);
          recursePerms(perm + S[index].toUpperCase(), index + 1);
          return; // the return statements are crucial
          // otherwise, we get duplicate permutations
        }
      }
    }
  };

  recursePerms('', 0);

  return allPossiblePerms;
};

/*

I: a string, consisting only of letters and digits
O: an array, containing all possible string we could create where
   each letter can either be lowercase or uppercase
C: 
E: 




*/