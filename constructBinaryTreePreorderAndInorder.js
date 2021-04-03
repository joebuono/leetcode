/*

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


 // the trick is to use a hash table where:
 // key = nodeVal
 // value = nodeIndex
 // to avoid O(n) search for the index of each element in inorder

 // we use the preorderIndex to avoid 'shift'-ing from the beginning of the preorder array to access the root of each subtree
 var preorderIndex = 0;
 var hashMap = {};
 
 var buildTree = function(preorder, inorder) {
   for (let i = 0; i < inorder.length; i++) {
     hashMap[inorder[i]] = i;
   }
 
   // left and right keep track of the boundaries, 
   // letting us know when we have an "empty" array, 
   // or rather no more children for the current node
   return construct(preorder, inorder, 0, inorder.length - 1);
 };
 
 var construct = function(preorder, inorder, left, right) {
   if (left > right) return null;
 
   const val = preorder[preorderIndex];
   preorderIndex++;
 
   const root = new TreeNode(val);
   
   root.left = construct(preorder, inorder, left, hashMap[val] - 1);
   root.right = construct(preorder, inorder, hashMap[val] + 1, right);
   return root;
 };
 
 debugger;
 // console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
 console.log(buildTree([-1], [-1]));

