/* Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome */

// input: the head of a singly linked list
// output: a boolean, true if the singly linked list is a palindrome, false if not
// constraints: The number of nodes in the list is in the range [1, 105]. 0 <= Node.val <= 9
// edge cases: if head has one number only, return true. If head is empty, return false

var Node = function (val, next) {
  this.val = val;
  this.next = null;
}

const isPalindrome = head => {
  // account for edge cases
  // create a result array
  // while a head is present in linked list
    // push head of linked list to result array and access next node in linked list
    // push every next node of linked list to result array until complete
  // if the reverse of result array equals result array
    // return true
  // otherwise
    // return false
};

let nodeA = new Node(1)
let nodeB = new Node(2)
let nodeC = new Node(2)
let nodeD = new Node(1)

nodeA.next = nodeB
nodeB.next = nodeC
node.next = nodeD
console.log(isPalindrome(nodeA)) // true

let nodeG = new Node(1)
let nodeK = new Node(2)

nodeG.next = nodeK
console.log(isPalindrome(nodeG)) // false