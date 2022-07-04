/*
leetcode - Delete Node in a Linked List

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.
*/

var Node = function (val, next) {
  this.val = val;
  this.next = null;
};

const deleteNode = node => {
  // assign the current val of node to the next node val
  // assign the next node to the next next node
  node.val = node.next.val
  node.next = node.next.next
};

// Runtime: 144 ms, faster than 5.50% of JavaScript online submissions for Delete Node in a Linked List.
// Memory Usage: 44.3 MB, less than 48.16% of JavaScript online submissions for Delete Node in a Linked List.

let nodeA = new Node(4)
let nodeB = new Node(5)
let nodeC = new Node(1)
let nodeD = new Node(9)
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = null
console.log('deleteNode: ', deleteNode(5)) // [4, 1, 9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

let nodeW = new Node(4)
let nodeX = new Node(5)
let nodeY = new Node(1)
let nodeZ = new Node(9)
nodeW.next = nodeX
nodeX.next = nodeY
nodeY.next = nodeZ
nodeZ.next = null
console.log('deleteNode: ', deleteNode(1)) // [4, 5, 9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.