/* leetcode - Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children */

 // input: a binary tree containing a bunch of nodes and children
 // output: a bool. True if the sum from root to leaf equals targetSum, false if not
 // constraints: The number of nodes in the tree is in the range [0, 5000]
 // edge cases: return false if tree is empty, return true if root equals target sum
 const hasPathSum = (root, targetSum) => {
  // account for edge cases

  // recursively call function on left side of tree and subtract sum from the root value OR recursively call function on right side of tree and subtract sum from the root value

};

console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22)) // true
console.log(hasPathSum([1, 2, 3], 5)) // false
console.log(hasPathSum([1, 2], 0)) // false