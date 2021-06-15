/* leetcode problem - Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center)
*/

// input: a binary tree
// output: a bool. True if the left side of tree matches the right side, false if not
// constraints: none currently
// edge cases: if no tree exists, return false
const isSymmetric = root => {
  // handle edge case

  // if left node doesn't equal right node
  // return false
  // otherwise
  // return true

  // recursively call left node and right node and compare
  if (!root) return false;

  const isSymmetric = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;

    return a.val === b.val && isSymmetric(a.left, b.right) && isSymmetric(a.right, b.left)
  }
  return isSymmetric(root.left, root.right)

};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3])) // true
console.log(isSymmetric([1, 2, 2, null, 3, null, 3])) // false