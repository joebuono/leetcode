/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


// Note that it's a binary tree, NOT a binary "search" tree

// Iterative using parent pointers
var lowestCommonAncestor = function(root, p, q) {
  // stack for tree traversal
  let stack = [root];

  // map for parent pointers (nothing points to root)
  // use a map so that we can set child nodes as keys and their parents as values
  let parents = new Map();
  parents.set(root, null);

  // iterate until we find both nodes p and q
  while (!parents.has(p) || !parents.has(q)) {
    let node = stack.pop();

    // while traversing the tree, keep saving the parent pointers
    if (node.left) {
      parents.set(node.left, node);
      stack.push(node.left);
    }
    if (node.right) {
      parents.set(node.right, node);
      stack.push(node.right);
    }
  }

  // ancestors set for node p
  let ancestors = new Set();

  // process all the ancestors for p using parent pointers
  while (p) {
    ancestors.add(p);
    p = parents.get(p);
  }

  // the first ancestor of q which appears in p's ancestor set is their LCA
  while (!ancestors.has(q)) {
    q = parents.get(q);
  }

  return q;
};





// Recursive approach
// Time: O(n)
// Space: O(n)
var lowestCommonAncestor = function(root, p, q) {
  // variable to store LCA node
  var lca = null;

  var recurse = (node) => {
    // if we've reached the end of a branch
    if (!node) return false;

    // left recursion
    let left = recurse(node.left);

    // right recursion
    let right = recurse(node.right);

    // check if the node itself is one of the values we're searching for
    let mid = node.val === p || node.val === q;

    // if any two of the three boolean flags are true,
    // then we've found the lowest common ancestor
    if (left + right + mid >= 2) {
      lca = node;
    }

    // return true if any of the three booleans is true
    return left || right || mid;
  };

  recurse(root);

  return lca;
};






// Attempted remix of Michael Chen's iterative DFS
// var lowestCommonAncestor = function(root, p, q) {
//   const foundP = false;
//   const foundQ = false;

//   const stack = [];

//   while (root || stack.length) {
//     if (root) {
//       stack.push(root);
//       if (root.val === p) foundP = true;
//       if (root.val === q) foundQ = true;
//       if (foundP && foundQ) return root;
//       root = root.left;
//     } else {
//       root = stack.pop();
//       root = root.right;
//     }
//   }
// };


// INCOMPLETE SOLUTION, not working
// Iterative without parent pointers
var lowestCommonAncestor = function(root, p, q) {
  // indicates the node's children are yet to be traversed
  const bothPending = 2;
  // left traversal done
  const leftDone = 1;
  // indicates the node can be popped off the stack
  const bothDone = 0;

  // initialize the stack with the root node
  let stack = [{parentNode: root, parentState: bothPending}];

  // this flag is set when either one of p or q is found
  let oneNodeFound = false;

  // this is used to keep track of the LCA index
  lcaIndex = -1;

  // post-order traversal of binary tree using stack (iterative)
  while (stack.length) {
    let {parentNode, parentState} = stack[stack.length - 1];


    // if the parentState is not equal to bothDone, 
    // then the parentNode can't be popped off yet
    if (parentState !== bothDone) {

      let childNode;

      // if both child traversals are pending
      if (parentState === bothPending) {
        
        // check if the current parentNode is either p or q
        if (parentNode === p || parentNode === q) {

          // if oneNodeFound is set to true, 
          // this means we have found both the nodes
          if (oneNodeFound) {
            return stack[lcaIndex][0];
          } else {
            // otherwise, set oneNodeFound to true
            // to mark that we found either p or q
            oneNodeFound = true;

            // save the current top index of the stack as the LCA index
            lcaIndex = stack.length - 1;
          }
        }

        // if both pending, traverse the left child first
        childNode = parentNode.left;
      } else {
        // otherwise, traverse right child
        childNode = parentNode.right;
      }

      // update the node state at the top of the stack
      // since we have visited one more child
      stack[stack.length - 1].parentState = parentState - 1;

      if (childNode) {
        stack.push({parentNode: childNode, parentNode: bothPending});
      }
    } else {
      // if the parentState of the node is bothDone, 
      // the top node can be popped off the stack

      // if the lcaIndex is equal to the length of the stack, 
      // then we decrease lcaIndex by 1
      if (oneNodeFound && lcaIndex === stack.length - 1) {
        lcaIndex--;
      }
      stack.pop();
    }
  }

  return null;
};


function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// [3,5,1,6,2,0,8,null,null,7,4]

let four = new TreeNode(4);
let seven = new TreeNode(7);
let two = new TreeNode(2, seven, four);
let six = new TreeNode(6);
let five = new TreeNode(5, six, two);
let zero = new TreeNode(0);
let eight = new TreeNode(8);
let one = new TreeNode(1, zero, eight);
let three = new TreeNode(3, five, one);

