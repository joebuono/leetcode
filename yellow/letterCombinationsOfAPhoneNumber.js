/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  let allCombos = [];
  if (!digits.length) return allCombos;

  let recurse = function(combo, index) {
    if (index === digits.length) {
      allCombos.push(combo);
      return;
    }
    let letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      recurse(combo + letters[i], index + 1);
    }
  };

  recurse('', 0);

  return allCombos;
};

/*

I: a string containing digits 2-9
O: an array of strings, representing all possible letter combinations
   that the number could represent
C:
E:

*/