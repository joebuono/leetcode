/*

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  // diameter is the depth of the left subtree plus the depth of the right subtree
  // calculate this for each node
  var maxDiameter = 1;

  var dfs = function(node) {
    if (!node) return 0;
    let leftDepth = dfs(node.left);
    let rightDepth = dfs(node.right);
    let diameter = leftDepth + rightDepth + 1;
    maxDiameter = Math.max(maxDiameter, diameter);
    return Math.max(leftDepth, rightDepth) + 1; // this is the line that tripped me up!
    // you're calculating the maxDepth for each subtree (i.e., which is deeper, the lef or right subtree)
    // plus 1 for the node itself
  };

  dfs(root);

  return maxDiameter - 1;
};

