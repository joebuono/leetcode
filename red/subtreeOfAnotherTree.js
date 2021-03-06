/*

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
 

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.

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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */


// Traverse every node in s, checking if t is a subtree
var isSubtree = function(s, t) {
  if (!s) return false;
  if (isSameTree(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);

  function isSameTree(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    if (tree1.val !== tree2.val) return false;
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
  };
};


var isSubtree = function(s, t) {
  // pre-order traversal
  var preorder = function(node, isLeft) {
    if (!node) {
      if (isLeft) return 'lnull';
      return 'rnull';
    }
    return '#' + node.val + ' ' + preorder(node.left, true) + ' ' + preorder(node.right, false);
  };

  let string1 = preorder(s);
  let string2 = preorder(t);
  return string1.indexOf(string2) > -1;
};


