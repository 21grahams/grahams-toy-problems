/* leetcode - Binary Tree Postorder Traversal

Given the root of a vinary tree, return the posterorder traversal of its nodes' values */


// input: a binary tree containing a collection of different nodes
// output: the POSTORDER of that binary tree (which will entail using recursion)
// constraints: The number of the nodes in the tree is in the range [0, 100]. || -100 <= Node.val <= 100
// edge cases: if there's no root, return empty tree/array of nodes
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const postOrderTraversal = root => {
  // account for edge case

  // create a variable to store the collection of nodes visited
  // create a variable for the root node and label it current

  // create a helper function which accepts a node
    // if the left node to the root has a node
      // call the helper function recursively and pass in the left node
    // if the right node to the root has a node
      // call the helper function recursively and pass in the right node
    // push the value of collected nodes into the collection array

  // invoke the helper function and pass in the current value
  // return the collection
};

// test one

var nodeA = new TreeNode(1);
var nodeB = new TreeNode(2);
var nodeC = new TreeNode(3);

nodeA.left = null;
nodeA.right = nodeB;
nodeB.left = nodeC;
nodeB.right = null;

console.log(postOrderTraversal(nodeA)); // [3, 2, 1]

//_________________________________________
// test two

console.log(postOrderTraversal()); // []

//_________________________________________
// test three

var nodeD = new TreeNode(1);

console.log(postOrderTraversal(nodeD)); // [1]

//_________________________________________
// test four

var nodeG = new TreeNode(1);
var nodeK = new TreeNode(2);

nodeG.left = nodeK;
nodeG.right = null;

//_________________________________________
// test five

var nodeX = new TreeNode(1);
var nodeY = new TreeNode(2);

nodeX.left = null;
nodeX.right = nodeY;