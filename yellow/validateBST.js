/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

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
 * @return {boolean}
 */

// This is a beautiful, elegant recursive solution!
// It's all about adjusting the min and max bounds as you go, 
// depending on which side of the tree you're exploring
var isValidBST = function(root, min = null, max = null) {
  if (!root) return true; // once we've reached the leaf nodes, we've checked everything on that side
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};


// var isValidBST = function(root) {
//   let nodes = [];

//   var dfsInOrder = function(node) {
//     if (node.left) dfsInOrder(node.left);
//     nodes.push(node.val);
//     if (node.right) dfsInOrder(node.right);
//   };

//   dfsInOrder(root);

//   for (let i = 1; i < nodes.length; i++) {
//     if (nodes[i] <= nodes[i - 1]) {
//       return false;
//     }
//   }

//   return true;
// };

/*

My first thought is to do DFS In-Order, which should yield a sorted array



*/

