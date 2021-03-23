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
 * @return {number[]}
 */


/*

DFS (pre/in/postorder) and BFS
Recursive and iterative

*/

// DFS recursive

const inOrder = (root) => {
  const result = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    result.push(node); // in order
    dfs(node.right);
  };

  dfs(root);

  return result;
};

const iterativeInorder = (root) => {
  const result = [];
  const stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};

const iterativePreorder = (root) => {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return result;
}
