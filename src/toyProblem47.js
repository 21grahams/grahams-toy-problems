/* leetcode - Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children */

class Treenode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const minDepth = (root) => {
  if (!root) return 0;
  let count = 1;
  let queue = [root];

  while (queue.length) {
    let cur = queue.length;
    for (let i = 0; i < cur; i++) {
      let node = queue.shift();
      if (!node.left && !node.right) return count;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++;
  }
  return count;
};

// test one
let nodeA = new Treenode(3);
let nodeB = new Treenode(9);
let nodeC = new Treenode(15);
let nodeD = new Treenode(20);
let nodeE = new Treenode(7);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeC.left = nodeD;
nodeC.right = nodeE;

console.log(minDepth(nodeA)); // 2
