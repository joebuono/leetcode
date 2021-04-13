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
 * @return {number[][]}
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// using two stacks
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const result = [];
  const s1 = [root];
  const s2 = [];
  let reverse = false;

  while (s1.length || s2.length) {
    const level = [];
    if (reverse) {
      while (s2.length) {
        const node = s2.pop();
        level.push(node.val);
        node.right && s1.push(node.right);
        node.left && s1.push(node.left);
      }
    } else {
      while (s1.length) {
        const node = s1.pop();
        level.push(node.val);
        node.left && s2.push(node.left);
        node.right && s2.push(node.right);
      }
    }
    result.push(level);
    reverse = !reverse;
  }

  return result;
};

