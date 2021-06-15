/* leetcode problem - Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
*/

// input: a set of two different binary trees
// output: a boolean. True if the BTs match each other and false if not
// constraints: none at this time
// edge cases: none at this time
const isSameTree = (p, q) => {
  // solution one
  return JSON.stringify(p) === JSON.stringify(q)

  // solution two (recursion)
  // if both are null end is found
  if (!p && !q) return true;
  // if any one is null, tree is not same
  if (!p || !q) return false;
  // if values do not match, tree is not same
  if (p.val !== q.val) return false;
  // check both branches (left & right)
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(isSameTree([1, 2], [1, null, 2])); // false
console.log(isSameTree([1, 2, 1], [1, 1, 2])); // false
