/* leetcode - Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node
*/

// input: a binary tree
// output: a number which represents the maximum depth of that binary tree
// constraints: none at this time
// edge cases: return 0 if no root exists /// return 1 if only root exists
const maxDepth = root => {

  // recursive approach
  if (!root) return 0;
  if (root.left === null && root.right === null) return 1;

  let l = maxDepth(root.left);
  let r = maxDepth(root.right);
  return (1 + ((l > r) ? l : r));

  // iterative approach
  if (!root) return 0;

  let count = 0;
  let queue = [root];
  let node = root;
  while (queue.length) {
    let cur = queue.length;
    for (let i = 0; i < cur; i++) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++
  }
  return count;
};

// root = 3
//    9        20
//null null  15   7
// count = 3

console.log(maxDepth([3, 9, 20, null, null, 15, 7])) // 3
console.log(maxDepth([1, null, 1])) // 2
console.log(maxDepth([])) // 0
console.log(maxDepth([0])) // 1

// generally a recursive solution will be depth first serach and an iterative will be breadth first search