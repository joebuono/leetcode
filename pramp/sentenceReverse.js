/*

Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
Constraints:

[time limit] 5000ms

[input] array.character arr

0 ≤ arr.length ≤ 100
[output] array.character




My explanation:
- The clever trick for this problem is to first reverse the entire arr, 
  then reverse each word, as delimited by spaces

*/

function reverseWords(arr) {
  // reverse the entire arr
  reverse(arr, 0, arr.length - 1);

  // keep track of the start and end of each individual word
  let start = 0;
  let end = 0;
  
  while (end < arr.length) {
    // check if the current char is any type of whitespace
    if (/\s/.test(arr[end])) {
      // reverse the current word
      reverse(arr, start, end - 1);
      start = end + 1;
      
      // if we've reached the end of the array
    } else if (end === arr.length - 1) {
      reverse(arr, start, end);
    }
    end++;
  }

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

