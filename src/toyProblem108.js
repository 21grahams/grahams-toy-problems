/* leetcode - Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root */

// input: the root of a binary tree
// output: the same binary tree, inverted, starting with the root
// constraints: The number of nodes in the tree is in the range [0, 100]. -100 <= Node.val <= 100
// edge cases: if the root is empty, return an empty tree (empty array)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const invertTree = root => {

  // iterative solution
  // account for edge case
  if (!root) return null;

  // create a node var, assign to root
  // create a queue var, assign to [root]
  const queue = [root];
  // while node exists
  while (queue.length) {
    // shift out first node in queue
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];
      // if node at left exists
      // push to queue.right
      if (node.left) queue.push(node.left);
      // if node at right exists
      // push to queue.left
      if (node.right) queue.push(node.right);
  }
  // return root
  return root;

  // recrusive solution
  // if (!root) return [];
  // if (root.left === null && root.right === null) return 1;

  // let l = invertTree(root.left);
  // let r = invertTree(root.right);
  // return l
};

// test one
let nodeA = new TreeNode(4);
let nodeB = new TreeNode(2);
let nodeC = new TreeNode(7);
let nodeD = new TreeNode(1);
let nodeE = new TreeNode(3);
let nodeF = new TreeNode(6);
let nodeG = new TreeNode(9);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
nodeC.right = nodeG;

console.log(invertTree(nodeA)) // [4, 7, 2, 9, 6, 3, 1]

// test two
let nodeX = new TreeNode(2);
let nodeY = new TreeNode(1);
let nodeZ = new TreeNode(3);

nodeX.left = nodeY;
nodeX.right = nodeZ;
nodeY.left = null;
nodeY.right = null;
nodeZ.left = null;
nodeZ.right = null;

console.log(invertTree(nodeX)) // [2, 3, 1]

// test three
console.log(invertTree([])) // []