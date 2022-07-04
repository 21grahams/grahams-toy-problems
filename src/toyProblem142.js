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
  // do something  
};

let nodeA = new Node(4)
let nodeB = new Node(5)
let nodeC = new Node(1)
let nodeD = new Node(9)
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = null
console.log('deleteNode: ', deleteNode(nodeA)) // [4, 1, 9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.