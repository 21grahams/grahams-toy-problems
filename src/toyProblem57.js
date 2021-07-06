/* leetcode - Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values */

class Treenode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const preorderTraversal = root => {
  // do something
};

// test one
let nodeA = new Treenode(1);
let nodeB = new Treenode(2);
let nodeC = new Treenode(3);


nodeA.left = null;
nodeA.right = nodeB;
nodeB.left = nodeC;
nodeC.right = null;

console.log(preorderTraversal([1, null, 2, 3])) // [1, 2, 3]