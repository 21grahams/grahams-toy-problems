/* leetcode - Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node
*/

// input: a binary tree
// output: a number which represents the maximum depth of that binary tree
// constraints: none at this time
// edge cases: return 0 if no root exists /// return 1 if only root exists
const maxDepth = root => {
  // account for edge cases

  // create a count

  // create an arr for left and right of root
  // while the arr exists
    // loop over arr
      // if left side of tree doesn't exist and right side of tree doesn't exist
        // add one to count
        // break
      // if left side of tree exists or right side of tree exists
        // add one to count
       // countinue

  // return the count
};

// root = 3
//    9        20
//null null  15   7
// count = 3

console.log(maxDepth([3, 9, 20, null, null, 15, 7])) // 3
console.log(maxDepth([1, null, 1])) // 2
console.log(maxDepth([])) // 0
console.log(maxDepth([0])) // 1