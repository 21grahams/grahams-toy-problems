/* leetcode problem - Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
*/

// input: a set of two different binary trees
// output: a boolean. True if the BTs match each other and false if not
// constraints: none at this time
// edge cases: none at this time
const isSameTree = (p, q) => {
  // QUICKER VERSION (might need to change to LONGER version)
  // loop through both trees
  // if each node in tree p matches each node in tree q
  // return true
  // otherwise
  // return false
  let masterObj = {};
  let masterObj2 = {};
  for (let key in p) {
    let val = p[key];
    masterObj[key] = val;
  }
  for (let key in q) {
    let val2 = q[key];
    masterObj2[key] = val2;
  }
  if (masterObj && masterObj2 && masterObj.val === masterObj2.val) {
    if (
      masterObj.left.val &&
      masterObj2.left.val &&
      masterObj.left.val === masterObj2.left.val
    ) {
      if (
        (masterObj.right.val &&
          masterObj2.right.val &&
          masterObj.right.val === masterObj2.right.val) ||
        (masterObj.right === null && masterObj2.right === null)
      ) {
        return true;
      }
    }
  }
  return false;

  // LONGER VERSION

  // create a queue (with an array) and a variable that will store each node of the tree
  // place root node in the queue
  // loop as long as there is anything in the queue
  // if node at left exists in both tree q and p
  // if node at right exists in both tree q and p
  // if these nodes equal each other
  // return true
  // return false
};

console.log(isSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(isSameTree([1, 2], [1, null, 2])); // false
console.log(isSameTree([1, 2, 1], [1, 1, 2])); // false
