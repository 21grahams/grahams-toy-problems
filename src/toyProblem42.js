/* leetcode - Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node
*/

// input: a binary tree
// output: a number which represents the maximum depth of that binary tree
// constraints: none at this time
// edge cases: return 0 if no root exists /// return 1 if only root exists
class Tree {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const maxDepth = root => {

  // recursive approach
  // if (!root) return 0;
  // if (root.left === null && root.right === null) return 1;

  // let l = maxDepth(root.left);
  // let r = maxDepth(root.right);
  // return (1 + ((l > r) ? l : r));

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


// test one
let nodeA = new Tree(3);
let nodeB = new Tree(9);
let nodeC = new Tree(20);
let nodeD = new Tree(null);
let nodeE = new Tree(null);
let nodeF = new Tree(15);
let nodeG = new Tree(7);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = null;
nodeC.left = nodeF;
nodeC.right = nodeG;
nodeF.left = null;
nodeF.right = null;
nodeG.left = null;
nodeG.right = null;

console.log(maxDepth(nodeA)) // 3

// test two
let nodeX = new Tree(1);
let nodeY = new Tree(null);
let nodeZ = new Tree(2);

nodeX.left = null;
nodeX.right = nodeZ;
nodeY.left = null;
nodeY.right = null;
nodeZ.left = null;
nodeZ.right = null;

console.log(maxDepth(nodeX)) // 2

// test three
console.log(maxDepth()) // 0


// test four
let nodeT = new Tree(0);

nodeT.left =  null;
nodeT.right =  null;
console.log(maxDepth(nodeT)) // 1

// generally a recursive solution will be depth first serach and an iterative will be breadth first search