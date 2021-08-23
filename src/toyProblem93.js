/* leetcode - Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list */

// input: a linked list
// output: the input linked list in reverse order
// constraints: The number of nodes in the list is the range [0, 5000]. -5000 <= Node.val <= 5000
// edge cases: if there is no linkedlist, return an empty array

var Node = function (val, next) {
  this.val = val;
  this.next = null;
};

var reverseList = function (head) {
  // create a previous var, assign to null
  let prev = null;
  // create a cur var, assign to head
  let cur = head;

  // while cur exists
  while (cur) {
    // create next var, assign to cur.next
    let next = cur.next;

    // assign cur.next to be prev
    cur.next = prev;
    // assign prev to be cur
    prev = cur;
    // assign cur to be next
    cur = next;
  }
  // return prev
  return prev;
};

// Runtime: 68 ms, faster than 97.90% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.8 MB, less than 34.60% of JavaScript online submissions for Reverse Linked List.

// test one
let nodeA = new Node(1)
let nodeB = new Node(2)
let nodeC = new Node(3)
let nodeD = new Node(4)
let nodeE = new Node(5)

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = null;

console.log("reverseList A: ", reverseList(nodeA)); // [5, 4, 3, 2, 1]


// test two
let nodeF = new Node(1);
let nodeG = new Node(2);

nodeF.next = nodeG;
nodeG.next = null;

console.log("reverseList: ", reverseList(nodeF)); // [2, 1]


// test three
let nodeX = new Node();

nodeX.next = null;

console.log("reverseList: ", reverseList(nodeX)); // []