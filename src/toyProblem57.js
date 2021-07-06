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

console.log(preorderTraversal(nodeA)) // [1, 2, 3]

console.log(preorderTraversal([])) // []

console.log(preorderTraversal([1])) // [1]

// test four
let nodeY = new Treenode(1);
let nodeZ = new Treenode(2);

nodeY.left = nodeZ;
nodeA.right = null;

console.log(preorderTraversal(nodeY)) // [1, 2]

// test five

let nodeG = new Treenode(1);
let nodeK = new Treenode(2);

nodeG.left = null;
nodeG.right = nodeK;
console.log(preorderTraversal(nodeG)) // [1, 2]