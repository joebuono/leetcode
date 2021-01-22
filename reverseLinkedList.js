/*

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

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
var reverseList = function(head) {
  let node = head;
  let prev = null;
  let next;
  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

// There's also a recursive solution

/*
public ListNode reverseList(ListNode head) {
  if (head == null || head.next == null) return head;
  ListNode p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}
*/