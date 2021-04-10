/*

Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example 1:

Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Example 2:

Input: words = ["cat","dog","catdog"]
Output: ["catdog"]

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

 var findAllConcatenatedWordsInADict = function(words) {
  const wordSet = new Set(words);
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (containsWords(words[i], wordSet)) {
      result.push(words[i]);
    }
  }

  return result;
};

var containsWords = function(word, set) {
  if (!word.length) return false; // takes care in case of empty string

  // this keeps track of which indices mark the end of a valid word
  const dp = new Array(word.length + 1).fill(false);
  // initialize to true for the start (an empty string starts the word, technically)
  dp[0] = true;

  // to avoid checking the word against itself
  set.delete(word);

  // i is the end (right side) of each substring
  // j is the start (left side) of each substring
  for (let i = 1; i <= word.length; i++) {
    for (let j = 0; j < i; j++) {
      // dp[j] means that the current word is contiguous with (starts right after) a previous word ends
      if (dp[j] && set.has(word.substring(i, j))) {
        // notice that it's i, not j
        // as in, a valid subword ends at this index and is contiguous with a previous subword
        dp[i] = true;
        break;
      }
    }
  }

  // add back the word we removed
  set.add(word);

  return dp[word.length];
};

