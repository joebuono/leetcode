/*



*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return null;
  let str = '';

  const preorderDFS = function(node) {
    if (!node) {
      str += 'n';
      return;
    } 

    str += node.val + ',';
    preorderDFS(node.left);
    preorderDFS(node.right);
  };

  preorderDFS(root);

  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(',');
  let index = 0;

  const construct = function() {
    if (index > arr.length || arr[index] === 'n') {
      return null;
    }

    root = new TreeNode(parseInt(arr[index]));

    index++;
    root.left = construct();
    index++;
    root.right = construct();

    return root;
  };

  return construct();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */