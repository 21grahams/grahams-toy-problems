/* leetcode - Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head */

// input: the head of a linked list and n which represents the nth node from the end of the list
// output: the same head of the linked list with the nth node removed
// constraints: The number of nodes in the list is sz. 1 <= sz <= 30. 0 <= Node.val <= 100. 1 <= n <= sz
// edge cases: if there's no head, return null. If there's no nth value, return head
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const removeNthFromEnd = (head, n) => {
  // create a left var, assign to head
  // create a right var, assign to head

  // while the next var of right exists
    // if there's no n
      // assign left to equal left.next
    // otherwise
      // decrement n

    // assign right to right.next

  // if n exists
    // return left.next
  // otherwise
    // assign left.next to equal left.next.next

  // return head
};


// test one
var nodeA = new Node(1);
var nodeB = new Node(2);
var nodeC = new Node(3);
var nodeD = new Node(4);
var nodeE = new Node(5);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = null;

console.log(removeNthFromEnd(nodeA, 2)); // [1, 2, 3, 5]

// test two
var nodeK = new Node(1);

nodeK.next = null;

console.log(removeNthFromEnd(nodeK, 1)); // []

// test three
var nodeX = new Node(1);
var nodeY = new Node(2);

nodeX.next = nodeY;
nodeY.next = null;

console.log(removeNthFromEnd(nodeX, 1)); // [1]