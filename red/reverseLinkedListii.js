/*

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// Nick White solution
var reverseBetween = function(head, m, n) {
  if (!head) return null;
  let prev = null;
  let currentNode = head;

  while (m > 1) {
    prev = currentNode;
    currentNode = currentNode.next;
    m--;
    n--;
  }

  let connection = prev;
  let tail = currentNode;

  // reverse linked list
  while (n > 0) {
    let nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
    n--;
  }

  if (connection !== null) {
    connection.next = prev;
  } else {
    head = prev;
  }

  tail.next = currentNode;
  return head;
};


// First attempt
var reverseBetween = function(head, m, n) {
  // traverse p2 to node n
  // traverse p1 to node m - 1 (the node before m)
  let dummy = new ListNode();
  dummy.next = head;
  p1 = dummy;
  p2 = dummy;
  let count = n;
  while (count) {
    p2 = p2.next;

    if (count < m) {
      p1 = p1.next;
    }
    count--;
  }

  // It's so much easier to visualize when you draw it out
  // on a whiteboard

  // point m node to what n node is pointing to next
  p1.next.next = p2.next;

  reverse(p1.next, p1.next.next, n - m);

  p1.next = p2;

  return dummy.next;


  function reverse(prev, node, count) {
    let next;
    for (let i = 0; i < count; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
};

