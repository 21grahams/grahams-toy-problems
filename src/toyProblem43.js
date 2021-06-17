/* leetcode problem - Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

// input: an array of nums in ascending order
// output: a height-balanced binary search tree
// constraints: the depth of the two subtrees of every node never differs by more than one
// edge cases: if array is empty, return empty BST
const sortedArrayToBST = (nums) => {
  if (nums.length === []) return [];

  let rootNum;
  rootNum = nums[Math.floor((nums.length - 1) / 2)];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < rootNum) {
      rootNum.left.val = nums[i];
    } else {
      rootNum.right.val = nums[i];
    }
    if (nums[i] < rootNum && nums[i] > rootNum.left.val) {
      rootNum.left.right.val = nums[i];
    } else {
      rootNum.left.left.val = nums[i];
    }
    if (nums[i] > rootNum && nums[i] < rootNum.right.val) {
      rootNum.right.left.val = nums[i];
    } else {
      rootNum.right.right.val = nums[i];
    }
  }
  return rootNum;
};

// [1, 2, 3, 4, 5, 6]

//         4
// 1   null     5
//     2     null     6
// null    3
// Math.floor(length - 1) / 2 = middle number

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0, -3, 9, -10, null, 5] ||| [0, -10, 5, null, -3,null, 9] is also accepted
console.log(sortedArrayToBST([1, 3])); // [3, 1]
