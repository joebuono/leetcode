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


// Recursive
var diameterOfBinaryTree = function(root) {
  let longest = -1;
  
  var dfs = function(node) {
    if (!node) return 0;
    
    let leftMax = dfs(node.left);
    let rightMax = dfs(node.right);
    let total = leftMax + rightMax + 1;
    
    longest = Math.max(longest, total);
    
    return Math.max(leftMax, rightMax) + 1;
  };
  
  dfs(root);
  
  return longest - 1;
};

