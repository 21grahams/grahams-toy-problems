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
  // account for edge cases

  // create a resultArr literal
  // create a helper function with two arguments, node and cur
    // increment cur and node val
    // if there's no left or right node
      // push cur onto resultArr
    // call left node and recursive call to helper and pass in left node, cur and '->'
    // call right node and recursive call to helper and pass in right node, cur and '->'

  // invoke helper, pass in root and empty string
  // return resultArr
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