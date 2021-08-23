/* leetcode - Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list */

// input: a linked list
// output: the input linked list in reverse order
// constraints: The number of nodes in the list is the range [0, 5000]. -5000 <= Node.val <= 5000
// edge cases: if there is no linkedlist, return an empty array

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const reverseList = head => {
  // do something
};

console.log('reverseList: ', reverseList([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]

console.log('reverseList: ', reverseList([1, 2])) // [2, 1]

console.log('reverseList: ', reverseList([])) // []