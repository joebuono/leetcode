/*

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // edge case: what if the first node has the val to remove?
  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next; // skip over the node
    } else {
      current = current.next;
    }
  }

  return head;
};


