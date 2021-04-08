/*

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

*/


var isSubtree = function(s, t) {
  // this line is necessary because we can't access the left or right nodes of null
  if (!s) return false;

  // check if the current nodes are the root nodes of the same tree
  // OR if any of the left or right subtrees of tree s are the same as tree t
  // Notice the OR operator here
  return sameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

var sameTree = function(s, t) {
  // standard checks of null and equality
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;
  // if the values of s and t are the same, 
  // check if BOTH the left AND right subtrees of s and t are the same
  // Notice the AND operator here
  return sameTree(s.left, t.left) && sameTree(s.right, t.right);
};
