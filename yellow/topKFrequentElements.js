/*

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// I get it conceptually, I just don't feel like implementing a heap right now
// youtube.com/watch?v=Wh3A29psE_Y
var topKFrequent = function(nums, k) {
  // hash table, count occurrence of each element

  // throw elements into heap as nodes (val, freq), sorted by frequency

  // pop k nodes from the heap, push their values to an array
  
  // return k elements as array
};

