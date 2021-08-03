/* leetcode - Binary Tree Paths

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const binaryTreePaths = root => {
  // do something
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