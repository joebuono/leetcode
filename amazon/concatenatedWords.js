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
  // build trie
  const trie = buildTrie(words);

  const result = [];

  for (let word of words) {
    if (trie[word[0]]) {
      if (recurse(trie, word, 0, 0) > 1) {
        result.push(word);
      }
    }
  }

  return result;
};

var recurse = function(trie, word, index, count) {
  let curr = trie;
  let count = 0;
  for (let i = index; i < word.length; i++) {
    
  }

  return count;
};

var buildTrie = function(words) {
  const trieObj = {};

  for (let word of words) {
    let trie = trieObj;
    for (let char of word) {
      if (!trie[char]) trie[char] = {};
      trie = trie[char];
    }
    trie['.'] = true; // indicates end of word
  }

  return trieObj;
};
