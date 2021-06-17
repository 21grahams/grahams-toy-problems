/* leetcode problem - Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

// input: an array of nums in ascending order
// output: a height-balanced binary search tree
// constraints: the depth of the two subtrees of every node never differs by more than one
// edge cases: if array is empty, return empty BST
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const sortedArrayToBST = (nums) => {
  // base cases
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  // create a center index
  // create a root num
  let centerIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[centerIdx]);

  // set left node to center of left subtree
  let leftSubTree = nums.slice(0, centerIdx);
  root.left = sortedArrayToBST(leftSubTree);

  // set right node to center of right subtree
  let rightSubTree = nums.slice(centerIdx + 1, nums.length);
  root.right = sortedArrayToBST(rightSubTree);

  return root;
};

// [1, 2, 3, 4, 5, 6]

//         4
// 1   null     5
//     2     null     6
// null    3
// Math.floor(length - 1) / 2 = middle number

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0, -3, 9, -10, null, 5] ||| [0, -10, 5, null, -3,null, 9] is also accepted
console.log(sortedArrayToBST([1, 3])); // [3, 1]
