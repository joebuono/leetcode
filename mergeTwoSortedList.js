/*

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode();

  let i = l1;
  let j = l2;
  let k = dummyHead;

  while (i && j) {
   if (i.val < j.val) {
      // push i
      k.next = i;
      i = i.next;
    } else {
      // push j
      k.next = j;
      j = j.next;
    }
    k = k.next;
  }

  // whatever is left over, push that
  k.next = i ? i : j;

  return dummyHead.next;
};

/*

I: Head nodes of two linked lists
O: A linked list in sorted order
C:
E:

Two pointers




*/
