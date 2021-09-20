/* leetcode - Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const buildTree = (preorder, inorder) => {
  // do something
};

// test one
let nodeA = new TreeNode(3);
let nodeB = new TreeNode(9);
let nodeC = new TreeNode(20);
let nodeD = new TreeNode(15);
let nodeE = new TreeNode(7);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = null;
nodeB.right = null;
nodeC.left = nodeD;
nodeC.right = nodeE;
nodeD.left = null;
nodeD.right = null;
nodeE.left = null;
nodeE.right = null;

console.log(buildTree(nodeA, nodeA)) // [3, 9, 20, null, null, 15, 7]

// test two
console.log(buildTree([-1], [-1])) // [-1]