/* Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level) */

// input: the root of a binary tree
// output: the level order traversal of the binary tree input (BFS)
// constraints: The number of nodes in the tree is in the range [0, 2000]. -1000 <= Node.val <= 1000
// edge cases: if there's no root, return null
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelOrder = (root) => {
  // account for edge case
  if (!root) return [];

  // create a queue, assign to [root]
  // create a result, assign to []
  let queue = [root],
      result = [];

  // while root exists (queue.length)
  while (queue.length) {
    // create length var, assign to length of queue
    // create node var, assign to empty array
    let length = queue.length;
    let node = [];
    // loop over length
    for (let i = 0; i < length; i++) {
      // create cur, assign to queue shift
      let cur = queue.shift();
      // push cur value onto node array
      node.push(cur.val);
      // if there's a left value, push it to queue
      if (cur.left) queue.push(cur.left);
      // if there's a right value, push it to queue
      if (cur.right) queue.push(cur.right);
    }
    // push all nodes onto result array
    result.push(node);
  }
  // return result
  return result;
};

// Runtime: 84 ms, faster than 44.07% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 41 MB, less than 12.68% of JavaScript online submissions for Binary Tree Level Order Traversal.

// test one
let nodeA = new TreeNode(3);
let nodeB = new TreeNode(9);
let nodeC = new TreeNode(20);
let nodeD = new TreeNode(15);
let nodeE = new TreeNode(7);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = null;
nodeB.right = null;
nodeC.left = nodeD;
nodeC.right = nodeE;
nodeD.left = null;
nodeD.right = null;
nodeE.left = null;
nodeE.right = null;

console.log(levelOrder(nodeA)); // [[3], [9, 20], [15, 7]]

// test two
let nodeG = new TreeNode(1);

nodeG.left = null;
nodeG.right = null;

console.log(levelOrder(nodeG)); // [[1]]

// test three
console.log(levelOrder()); // []
