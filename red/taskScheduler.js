/*

Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
Example 3:

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
 

Constraints:

1 <= task.length <= 104
tasks[i] is upper-case English letter.
The integer n is in the range [0, 100].

*/


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// There are two main ways to solve it: Use a PriorityQueue (MaxHeap), or calculate idle slots

// This is the calculate idle slots solution
var leastInterval = function(tasks, n) {
  // count frequency of tasks
  let map = new Array(26).fill(0); // 26 letter in the alphabet
  for (let task of tasks) {
    map[task.charCodeAt(0) - 65]++;
  }

  // sort in asc order
  map.sort((a, b) => b - a);

  let maxVal = map[0] - 1;
  let idleSlots = maxVal * n;

  for (let i = 1; i < map.length; i++) {
    idleSlots -= Math.min(map[i], maxVal);
  }

  return idleSlots > 0 ? tasks.length + idleSlots : tasks.length;
};


