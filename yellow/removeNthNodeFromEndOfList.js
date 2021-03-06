/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

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
 * @param {number} n
 * @return {ListNode}
 */

// One-pass solution, two pointers
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // advances the first pointer so that the gap between
  // the first and second pointers is n nodes apart
  while (first && n >= 0) {
    first = first.next;
    n--;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};

// Two-pass solution
var removeNthFromEnd = function(head, n) {
  // We're declaring a dummy head just in case
  // we need to actually remove the head of the linked list
  let dummy = new ListNode();
  dummy.next = head;
  let length = 0;
  let first = head;

  while (first) {
    length++;
    first = first.next;
  }

  length -= n;
  first = dummy; // Notice we start for the dummy head again
  while (length > 0) {
    length--;
    first = first.next;
  }

  first.next = first.next.next;

  return dummy.next;
};

