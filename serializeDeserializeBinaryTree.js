
// Experiment with BFS, and also iterative implementation of DFS preorder

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
* Encodes a tree to a single string.
*
* @param {TreeNode} root
* @return {string}
*/
var serialize = function(root) {
if (!root) return 'n';
let str = '';

const preorderDFS = function(node) {
  if (!node) {
    str += 'n,';
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
    index++;
    return null;
  }

  const root = new TreeNode(parseInt(arr[index++]));

  root.left = construct();
  root.right = construct();

  return root;
};

return construct();
};

let five = new TreeNode(5);
let four = new TreeNode(4);
let three = new TreeNode(3, four, five);
let two = new TreeNode(2);
let one = new TreeNode(1, two, three);


let ser = serialize(one);
console.log(ser);

debugger;
let deser = deserialize(ser);
console.log(deser);

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/