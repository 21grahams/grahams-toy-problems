/* leetcode - Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const isSubtree = (root, subRoot) => {
  // do something
};

// test one
// root
let nodeA = new TreeNode(3);
let nodeB = new TreeNode(4);
let nodeC = new TreeNode(5);
let nodeD = new TreeNode(1);
let nodeE = new TreeNode(2);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = null;
nodeC.right = null;
nodeD.left = null;
nodeD.right = null;
nodeE.left = null;
nodeE.right = null;

// subRoot
let nodeX = new TreeNode(4);
let nodeY = new TreeNode(1);
let nodeZ = new TreeNode(2);

nodeX.left = nodeY;
nodeX.right = nodeZ;
nodeY.left = null;
nodeY.right = null;
nodeZ.left = null;
nodeZ.right = null;

console.log(isSubtree(nodeA, nodeX)) // true

//==========================================

// test two
// root
let node1 = new TreeNode(3);
let node2 = new TreeNode(4);
let node3 = new TreeNode(5);
let node4 = new TreeNode(1);
let node5 = new TreeNode(2);
let node6 = new TreeNode(0);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = null;
node3.right = null;
node4.left = null;
node4.left = null;
node4.right = null;
node5.left = node6;
node5.right = null;
node6.left = null;
node6.right = null;

// subRoot
let node10 = new TreeNode(4);
let node20 = new TreeNode(1);
let node30 = new TreeNode(2);

node10.left = node20;
node10.right = node30;
node20.left = null;
node20.right = null;
node30.left = null;
node30.right = null;

console.log(isSubtree(node1, node10)) // false