/* leetcode problem - Balanced Binary Tree

Given a binary tree, determine if it is height-balanced

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1
*/

// input: a binary tree, starting from the root
// output: a bool, depending on if the binary tree is height balanced. True if so, false if not
// contraints: Only constraint is the constraint of what a height balanced tree is. Child subtree must only differ in height by no more than one
// edge cases: if root is empty, return true
const checkHeight = (node) => {
  if (node === null) return 0;

  const left = checkHeight(node.left);
  const right = checkHeight(node.right);

  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }

  // height of a node
  return Math.max(left, right) + 1;
};
const isBalanced = (root) => {
  if (!root) return true;
  return checkHeight(root) !== false;
};

console.log(root([3, 9, 20, null, null, 15, 7])); // true
console.log(root([1, 2, 2, 3, 3, null, null, 4, 4])); // false
console.log(root([])); // true
