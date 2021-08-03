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
}

//============================
//=====RECURSIVE APPROACH=====
//============================
const binaryTreePaths = (root) => {

  // account for edge cases
  if (!root) return null;

  // create a resultArr literal
  let resultArr = [];
  // create a helper function with two arguments, node and cur
  let helperFunc = (node, cur) => {
    // increment cur and node val
    cur += node.val;
    // if there's no left or right node
    // push cur onto resultArr
    if (!node.left && !node.right) resultArr.push(cur);
    // call left node and recursive call to helper and pass in left node, cur and '->'
    node.left && helperFunc(node.left, cur + "->");
    // call right node and recursive call to helper and pass in right node, cur and '->'
    node.right && helperFunc(node.right, cur + "->");
  };
  // invoke helper, pass in root and empty string
  helperFunc(root, "");
  // return resultArr
  return resultArr;
};

// Runtime: 76 ms, faster than 80.72% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.5 MB, less than 17.27% of JavaScript online submissions for Binary Tree Paths.

//================================
//=====NON RECURSIVE APPROACH=====
//================================
const binaryTreePaths = (root) => {
  var result = [];
  var stack = [[root, [root.val]]];
  while (stack.length) {
    var element = stack.pop();
    var node = element[0];
    if (!node.left && !node.right) result.push(element[1].join("->"));
    if (node.left) stack.push([node.left, [...element[1], node.left.val]]);
    if (node.right) stack.push([node.right, [...element[1], node.right.val]]);
  }
  return result;
};

// Runtime: 80 ms, faster than 62.16% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.5 MB, less than 30.22% of JavaScript online submissions for Binary Tree Paths.

// test one
let nodeA = new TreeNode(1);
let nodeB = new TreeNode(2);
let nodeC = new TreeNode(3);
let nodeD = new TreeNode(5);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = null;
nodeB.right = nodeD;

console.log(binaryTreePaths(nodeA)); // ["1->2->5", "1->3"]

// test two
let nodeG = new TreeNode(1);

console.log(binaryTreePaths(nodeG)); // ["1"]
