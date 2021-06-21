/* leetcode problem - Balanced Binary Tree

Given a binary tree, determine if it is height-balanced

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1
*/

// input: a binary tree, starting from the root
// output: a bool, depending on if the binary tree is height balanced. True if so, false if not
// contraints: Only constraint is the constraint of what a height balanced tree is. Child subtree must only differ in height by no more than one
// edge cases: if root is empty, return true
const isBalanced = root => {
  // account for edge case

  // create a node value, set to root
  // create a queue value, set to [root]
  // while the root exists
    // create a cur value, set to queue.length
      // iterate over cur
        // set node to shifting first val out of queue
        // if left node and right node exist
          // push them into the queue
        // else
          // return true

  // return false
};

console.log(root([3, 9, 20, null, null, 15, 7])) // true
console.log(root([1, 2, 2, 3, 3, null, null, 4, 4])) // false
console.log(root([])) // true