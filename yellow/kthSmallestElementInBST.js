/*

Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

 
Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
 

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?


*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// Iterative solution (beautiful)
var kthSmallest = function(root, k) {
  let stack = [];

  while (true) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (--k === 0) return root.val;
    root = root.right;
  }
};



// Doesn't quite work
var kthSmallest = function(root, k) {
  // DFS in-order
  let kth;

  var DFS = function(node) {
    if (node.left) DFS(node.left);
    if (--k === 0) kth = node.value;
    if (node.right) DFS(node.right);
  };

  DFS(root);

  return kth;
};


