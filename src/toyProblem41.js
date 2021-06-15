/* leetcode problem - Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center)
*/

// input: a binary tree
// output: a bool. True if the left side of tree matches the right side, false if not
// constraints: none currently
// edge cases: if no tree exists, return false
const isSymmetric = root => {
  // solution one - recursion
  if (!root) return false;

  const isSymmetric = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;

    return a.val === b.val && isSymmetric(a.left, b.right) && isSymmetric(a.right, b.left)
  }
  return isSymmetric(root.left, root.right)

  // solution two - iterative
  if (!root) return false;
  let queque = [root.left, root.right];
  while (queque.length) {
    let len = queque.length;
    for (let i = 0; i < len; i++) {
      let t1 = queque.shift();
      let t2 = queque.shift();
      if (!t1 && !t2) continue;
      if (!t1 || !t2) return false;
      if (t1.val !== t2.val) return false;
      queque.push(t1.left, t2.right);
      queque.push(t1.right, t2.left);
    }
  }
  return true;
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3])) // true
console.log(isSymmetric([1, 2, 2, null, 3, null, 3])) // false