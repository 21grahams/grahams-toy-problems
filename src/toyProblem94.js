/* leetcode - Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const removeNthFromEnd = (head, n) => {
  // do something
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

console.log(nodeA, 2) // [1, 2, 3, 5]

// test two
var nodeK = new Node(1);

nodeK.next = null;

console.log(nodeK, 1) // []

// test three
var nodeX = new Node(1);
var nodeY = new Node(2);

nodeX.next = nodeY;
nodeY.next = null;

console.log(nodeX, 1) // [1]