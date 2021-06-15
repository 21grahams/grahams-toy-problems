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
};

console.log(isSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(isSameTree([1, 2], [1, null, 2])); // false
console.log(isSameTree([1, 2, 1], [1, 1, 2])); // false
