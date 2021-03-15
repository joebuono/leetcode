/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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



// Iterative
// var isSymmetric = function(root) {
//   let stack = [root, root];
  
//   while (stack.length) {
//     let t2 = stack.pop();
//     let t1 = stack.pop();
//     if (!t1 && !t2) continue;
//     if (!t1 || !t2) return false;
//     if (t1.val !== t2.val) return false;
//     stack.push(t1.left);
//     stack.push(t2.right);
//     stack.push(t1.right);
//     stack.push(t2.left);
//   }
  
//   return true;
// };

// Recursive solution
var isSymmetric = function(root) {
  // The trick is passing two root nodes at the beginning
  return isMirror(root, root);
};

var isMirror = function(t1, t2) {
  // If both nodes are null, return true;
  if (!t1 && !t2) return true;
  
  // If only one of the nodes is null, or the values of the nodes are not equal, return false
  if (!t1 || !t2 || t1.val !== t2.val) return false;
  
  // *** Recursively compare the left node's left node with the right node's right node
  // and the left node's right node with the right node's left node
  // You could also think of it as inner and outer
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
};
