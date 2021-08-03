/* leetcode - Binary Tree Paths

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children */

// input: the root of a binary tree
// output: all root-to-leaf paths in any order
// constraints: A leaf is a node with no children. The number of nodes in the tree is in the range [1, 100]. -100 <= Node.val <= 100
// edge cases: if root has no children, return just the root node. If no root exists, return null
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const binaryTreePaths = root => {
  // account for edge case

  // create a queue variable, assign to root's length
  // while queue exists
    // create an result array literal
    // if a left value exists
      // push to result array plus -> in template literal
    // if a right value exists
      // push to result array plus -> in template literal

  // return result array
};

// test one
let nodeA = new TreeNode(1);
let nodeB = new TreeNode(2);
let nodeC = new TreeNode(3);
let nodeD = new TreeNode(5);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = null;
nodeB.right = nodeD;

console.log(binaryTreePaths(nodeA)) // ["1->2->5", "1->3"]

// test two
let nodeG = new TreeNode(1);

console.log(binaryTreePaths(nodeG)) // ["1"]