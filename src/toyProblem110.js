/* Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level) */

// input: the root of a binary tree
// output: the level order traversal of the binary tree input (BFS)
// constraints: The number of nodes in the tree is in the range [0, 2000]. -1000 <= Node.val <= 1000
// edge cases: if there's no root, return an empty array
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const levelOrder = root => {
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

console.log(levelOrder(nodeA)) // [[3], [9, 20], [15, 7]]

// test two
let nodeG = new TreeNode(1);

nodeG.left = null;
nodeG.right = null;

console.log(levelOrder(nodeG)) // [[1]]

// test three
console.log(levelOrder()) // []