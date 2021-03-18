/*

Pairs with Specific Difference
Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

Note: the order of the pairs in the output array should maintain the order of the y element in the original array.

Examples:

input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []



My explanation:
- In a way, this problem is a variation on twoSum
- However, we want to avoid the O(n^2) of searching for each pair's complement
- We can do this by using a set. We don't need a map because we already have access to both x and y

x - y = k
x = y + k

Hence, if the set has y + k, then we add add [y + k, y] to our result

*/

function findPairsWithGivenDifference(arr, k) {
  const set = new Set();
  
  for (let num of arr) {
    set.add(num);
  }
  
  let result = [];
  
  for (let num of arr) {
    if (set.has(num + k)) {
      result.push([num + k, num]);
    }
  }
  
  return result;
}


// Alternative solution using hash table
function findPairsWithGivenDifference(arr, k) {
  const hash = {};
  
  for (let num of arr) {
    hash[num - k] = num;
  }
  
  let result = [];
  
  for (let num of arr) {
    if (hash[num] !== undefined) {
      result.push([hash[num], num]);
    }
  }
  
  return result;
}
