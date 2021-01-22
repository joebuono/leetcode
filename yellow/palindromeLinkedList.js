/*

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // traverse list with fast and slow pointers
  // reverse the right side of the list
  // then compare the lists in tandem
  // what if the length is odd? Doesn't matter!

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow is now the middle of the linked list
  // reverse it starting here
  function reverseLL(head) {
    let node = head;
    let next;
    let prev = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  };

  let middle = reverseLL(slow);
  let start = head;

  // then traverse both lists in tandem to check if palindrome
  // I don't think it actually matters if the lists are different lengths

  while (middle && start) {
    if (middle.val !== start.val) {
      return false;
    }
    middle = middle.next;
    start = start.next;
  }
  
  return true;
};


// 123454321