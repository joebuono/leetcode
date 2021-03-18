/*

Getting a Different Number
Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]

output: 4 
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ MAX_INT
0 ≤ arr[i] ≤ MAX_INT for every i, 0 ≤ i < MAX_INT
[output] integer



My explanation:
- There are at least 3 different approaches to this problem:

1. Sort the array. Then, iterate through the array and return the first index of an integer that does not match its index
   - Time: O(n log n)
   - Space: O(1), depends on sorting algorithm, JavaScript .sort sorts in place

2. Throw each integer into a set. Then iterate from 0 - n. If the integer is not in the set, return that integer

3. For each integer, swap it with the integer at that integers index (see below). Then return first integer which does not match its index

*/

function getDifferentNumber(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let currentInt = arr[i];

    // the condition for swapping
    while (currentInt !== i && currentInt < arr.length) {
      [arr[i], arr[currentInt]] = [arr[currentInt], arr[i]];
      currentInt = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return i;
  }

  return arr.length;
}




