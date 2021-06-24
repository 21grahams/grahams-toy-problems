/* leetcode - Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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

console.log(minDepth([3, 9, 20, null, null, 15, 7])); // 2
console.log(minDepth([2, null, 3, null, 4, null, 5, null, 6])); // 5
