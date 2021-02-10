/*

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
 * @return {void} Do not return anything, modify head in-place instead.
 */

// Solution: split the list in half, reverse the second half, 
// then merge them together, alternating
// This still doens't quite work
var reorderList = function(head) {
  if (!head) return null;
  if (!head.next) return head;

  // These will become: 
  let l1 = head; // head of first linked list
  let prev = null; // tail of first linked list
  let slow = head; // head of second linked list
  let fast = head; // tail of second linked list

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.nect = null;
  // we're using prev as the tail of the first half of the linked list
  // slow will become the head of the second half of the linked list

  // Reverse the second half of the linked list
  let l2 = reverse(slow);

  // Merge the two halves of the linked list
  // Notice that we're not returning anything
  // because we're modifying the linked list in place
  merge(l1, l2);

  function reverse(node) {
    let prev = null;
    let next;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  }

  function merge(l1, l2) {
    while (l1) {
      let p1 = l1.next;
      let p2 = l2.next;

      l1.next = l2;

      if (l1.next === null) {
        break;
      }

      l2.next = p1;
      l1 = p1;
      l2 = p2;
    }
  }
};


// Why doesn't this work? Maybe because we're not modifying in-place
var reorderList = function(head) {
  let values = [];
  let p = head;

  while (p) {
    values.push(p.val);
    p = p.next;
  }

  let dummy = new ListNode();
  let curr = dummy;

  let i = 0;
  let j = values.length - 1;

  while (i < j) {
    curr.next = new ListNode(values[i]);
    curr = curr.next;
    curr.next = new ListNode(values[j]);
    curr = curr.next;
    i++;
    j--;
  }

  if (i === j) {
    curr.next = new ListNode(values[i]);
  }

  return dummy.next;
};

