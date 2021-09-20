/* leetcode - Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree */

// input: two integer arrays, preorder and inorder of a binary tree
// output: the binary tree from the preorder and inorder of the same binary tree
// constraints: 1 <= preorder.length <= 3000. inorder.length == preorder.length. -3000 <= preorder[i], inorder[i] <= 3000. preorder and inorder consist of unique values. Each value of inorder also appears in preorder. preorder is guaranteed to be the preorder traversal of the tree. inorder is guaranteed to be the inorder traversal of the tree.
// edge cases: return null if binary tree root is empty
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