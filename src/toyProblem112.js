/* leetcode - Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree */

// input: two integer arrays, preorder and inorder of a binary tree
// output: the binary tree from the preorder and inorder of the same binary tree
// constraints: 1 <= preorder.length <= 3000. inorder.length == preorder.length. -3000 <= preorder[i], inorder[i] <= 3000. preorder and inorder consist of unique values. Each value of inorder also appears in preorder. preorder is guaranteed to be the preorder traversal of the tree. inorder is guaranteed to be the inorder traversal of the tree.
// edge cases: return null if binary tree root is empty
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTree = (preorder, inorder) => {
  // create a new map
  let map = new Map();
  // loop over inorder with a forEach, takes in element and index
  inorder.forEach((element, index) => {
    // set element and index to map
    map.set(element, index);
  })
  // create a helper function, takes in start and end
  function helper(start, end) {
    // if start is greater than end, return null
    if (start > end) return null;
    // create a curr var, assign to preorder.shift()
    let curr = preorder.shift();
    // create a node var, assign to new TreeNode(curr)
    let node = new TreeNode(curr);
    // assign left node to helper function, takes in start, map.get on curr - 1
    node.left = helper(start, map.get(curr) - 1);
    // assign right node to helper function, takes in map.get on curr + 1 and end
    node.right = helper(map.get(curr) + 1, end);
    // return node
    return node;
  }
  // return helper, takes in 0 and inorder.length - 1
  return helper(0, inorder.length - 1)
};

// Runtime: 154 ms, faster than 36.87% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
// Memory Usage: 41.6 MB, less than 96.30% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.

// test one
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])) // [3, 9, 20, null, null, 15, 7]

// test two
console.log(buildTree([-1], [-1])) // [-1]