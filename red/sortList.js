/*

Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// The best solution is the merge sort algorithm applied
// to the linked list directly
// https://leetcode.com/problems/sort-list/solution/

// Naive solution, O(n) space
var sortList = function(head) {
  let values = [];

  let curr = head;

  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  values.sort((a, b) => a - b);

  let dummy = new ListNode();
  curr = dummy;

  for (let val of values) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return dummy.next;
};

