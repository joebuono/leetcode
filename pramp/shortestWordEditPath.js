/*

Shortest Word Edit Path
Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

Examples:

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1


My explanation:
- Whenever you see the words "shortest path", your immediate thought should be "breadth-first search"

*/

function shortestWordEditPath(source, target, words) {
  // This is only really needed if we take the approach of swapping each char
  // through the alphabet, then checking to see if the resulting word
  // is in the set of words
  // let wordset = new Set(words);
  // if (!wordset.has(target)) return -1;

  let visited = new Set([source]);
  
  let level = 0;

  // BFS - shortest path
  let queue = [source];
  
  while (queue.length) {
    let size = queue.length;
    
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr === target) return level;
      compareWords(curr, words, queue, visited);
    }
    level++;
  }
  
  return -1;
}

function compareWords(curr, words, queue, visited) {
  for (let word of words) {
    if (!visited.has(word) && curr.length === word.length) {
      let diff = 0;
      for (let j = 0; j < curr.length; j++) {
        if (curr[j] !== word[j]) {
          diff++;
          if (diff > 1) break;
        }
      }
      if (diff === 1) {
        queue.push(word);
        visited.add(word);
      }
    }
  }
}