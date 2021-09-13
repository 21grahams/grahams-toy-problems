/* leetcode - Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root */

// input: the root of a binary tree
// output: the same binary tree, inverted, starting with the root
// constraints: The number of nodes in the tree is in the range [0, 100]. -100 <= Node.val <= 100
// edge cases: if the root is empty, return an empty tree (empty array)
const invertTree = root => {
  // do something
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])) // [4, 7, 2, 9, 6, 3, 1]

console.log(invertTree([2, 1, 3])) // [2, 3, 1]

console.log(invertTree([])) // []