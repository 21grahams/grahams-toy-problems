/* leetcode problem - Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

// input: an array of nums in ascending order
// output: a height-balanced binary search tree
// constraints: the depth of the two subtrees of every node never differs by more than one
// edge cases: if array is empty, return empty BST
const sortedArrayToBST = nums => {
  // account for the edge case

  // create a rootNum
  // loop through nums array, collect rootNum, which is middle num

  // loop again through nums array
    // if currentNum is less than rootNum
      // store it to the left of root
    // otherwise
      // store it to the right of root
    // if currentNum is less than rootNum but greater than root.left
      // store to the right of root.left
    // otherwise
      // store to the left of root.left
    // if currentNum is greater than rootNum but less than root.right
      // store it to the left of root.right
    // otherwise
      // store it to the right of root.right

};


// [1, 2, 3, 4, 5, 6]

//         4
// 1   null     5
//     2     null     6
// null    3
// Math.floor(length - 1) / 2 = middle number

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])) // [0, -3, 9, -10, null, 5] ||| [0, -10, 5, null, -3,null, 9] is also accepted
console.log(sortedArrayToBST([1, 3])) // [3, 1]