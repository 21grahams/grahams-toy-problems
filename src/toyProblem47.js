/* leetcode - Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children */

// input: a binary tree
// output: the minimum depth of the tree, logged as a number
// constraints: none at this time
// edge cases: if there's no root, return 0. If there's just a root without children, log 1
const minDepth = root => {
  // account for edge case

  // create a count
  // create a node, assign to root
  // create a queue, assign to [root]
  // while the queue has a root node
    // create a cur variable, assign to the length of queue
    // loop over the cur
      // re assign node to queue and shift
      // if there's a node to the left of root
        // push it to the queue
      // if there's a node to the right of root
        // push it to the queue
    // increment count

  // return count
};