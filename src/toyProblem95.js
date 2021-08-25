/* leetcode - Reorder List

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed */

// input: the head of a singly linkedList
// output: the same linkedList reordered to follow this pattern: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// constraints: The number of nodes in the list is in the range [1, 5 * 104]. 1 <= Node.val <= 1000
// edge cases: if there's no head, return null
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reorderList = (head) => {
  // account for edge cases
  if (!head) return null;
  // create a resultArr
  let resultArr = [],
    cur = head;
  // create a variable for cur, assign to head

  // while cur exists
  while (cur) {
    // push cur onto resultArr
    resultArr.push(cur);
    // assign cur to cur.next
    cur = cur.next;
  }
  // create var for left, assign to 0
  // create var for right, assign to end of resultArr
  let left = 0, right = resultArr.length - 1;

  // while left is less than right
  while (left < right) {
    // assign resultArr at left index.next to arr at right index
    resultArr[left].next = resultArr[right];
    // increment left
    left++;
    // assign resultArr at right index.next to arr at left index
    resultArr[right].next = resultArr[left];
    // decrement right
    right--;
  }

  // assign resultArr at left index.next to null
  resultArr[left].next = null;
  // return resultArr at 0 index
  return resultArr[0];
};

// Runtime: 112 ms, faster than 43.23% of JavaScript online submissions for Reorder List.
// Memory Usage: 46.3 MB, less than 78.46% of JavaScript online submissions for Reorder List.

// test one
let nodeA = new Node(1);
let nodeB = new Node(2);
let nodeC = new Node(3);
let nodeD = new Node(4);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = null;

console.log(reorderList(nodeA)); // [1, 4, 2, 3]

// test two
let nodeG = new Node(1);
let nodeH = new Node(2);
let nodeI = new Node(3);
let nodeJ = new Node(4);
let nodeK = new Node(5);

nodeG.next = nodeH;
nodeH.next = nodeI;
nodeI.next = nodeJ;
nodeJ.next = nodeK;
nodeK.next = null;

console.log(reorderList(nodeG)); // [1, 5, 2, 4, 3]
