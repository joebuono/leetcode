/*

Move Zeros To End
Given a static-sized array of integers arr, move all zeroes in the array to the end of the array. You should preserve the relative order of items in the array.

We should implement a solution that is more efficient than a naive brute force.

Examples:

input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

*/


function moveZerosToEnd(arr) {
  let i = 0;
  while (arr[i] !== 0 && i < arr.length) i++;
  if (i === arr.length) return arr;
  
  for (let j = i; j < arr.length; j++) {
    while (arr[j] === 0 && j < arr.length) j++;
    if (j === arr.length) break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
  }
  
  return arr;
}

/*

Pseudocode for more elegant solution:

function moveZerosToEnd(array):
    write = 0
    for read from 0 to array.length - 1:
        if array[read] != 0:
            array[read], array[write] = array[write], array[read]
            write += 1

    return array
*/