/* leetcode - Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values */

// input: a binary tree of nodes
// output: the nodes of the preorder traversal of that binary tree
// contraints: The number of nodes in the tree is in the range [0, 100] || 100 <= Node.val <= 100
// edge cases: if tree is empty, return empty array of nodes
class Treenode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const preorderTraversal = (root) => {
  // account for edge case
  if (!root) return [];

  // create a var to store the values of nodes visited
  let collection = [];
  // store the root of the tree in a var called current
  let curr = root;
  // create helper function which accepts a node
  const helperFunc = (node) => {
    // push the value of the node to the variable that stores the values
    collection.push(node.val);
    // if the node has a left property
    if (node.left) {
      // call the helper function with the left property on the node
      helperFunc(node.left);
    }
    // if the node has a right property
    if (node.right) {
      // call the helper function with the left property on the node
      helperFunc(node.right);
    }
  };
  // invoke the helper function with the current variable
  helperFunc(curr);
  // return the array of values
  return collection;
};

// Runtime: 64 ms, faster than 98.65% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 38.8 MB, less than 36.27% of JavaScript online submissions for Binary Tree Preorder Traversal.

// test one
let nodeA = new Treenode(1);
let nodeB = new Treenode(2);
let nodeC = new Treenode(3);

nodeA.left = null;
nodeA.right = nodeB;
nodeB.left = nodeC;
nodeB.right = null;

console.log(preorderTraversal(nodeA)); // [1, 2, 3]

//______________________________________________

// test two
console.log(preorderTraversal()); // []

//______________________________________________

// test three
let nodeX = new Treenode(1);

nodeX.left = null;
nodeX.right = null;

console.log(preorderTraversal(nodeX)); // [1]

//______________________________________________

// test four
let nodeY = new Treenode(1);
let nodeZ = new Treenode(2);

nodeY.left = nodeZ;
nodeA.right = null;

console.log(preorderTraversal(nodeY)); // [1, 2]

//______________________________________________

// test five

let nodeG = new Treenode(1);
let nodeK = new Treenode(2);

nodeG.left = null;
nodeG.right = nodeK;
console.log(preorderTraversal(nodeG)); // [1, 2]

//______________________________________________