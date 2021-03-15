/*

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.


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


 var maxPathSum = function(root) {
  if (!root.left && !root.right) return root.val;
  
  let max = Number.MIN_SAFE_INTEGER;
  
  const dfs = function(node) {
    if (!node) return 0;
    const leftSum = Math.max(dfs(node.left), 0); // or zero is important, account for negatives
    const rightSum = Math.max(dfs(node.right), 0);
    let localMax = node.val + leftSum + rightSum;
    max = Math.max(max, localMax);
    return node.val + Math.max(leftSum, rightSum); // return the maximum path, left or right, plus current node
  };
  
  dfs(root);
  
  return max;
};

