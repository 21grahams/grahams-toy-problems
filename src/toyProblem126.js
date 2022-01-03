/* Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome */

// input: the head of a singly linked list
// output: a boolean, true if the singly linked list is a palindrome, false if not
// constraints: The number of nodes in the list is in the range [1, 105]. 0 <= Node.val <= 9
// edge cases: if head has one number only, return true. If head is empty, return false

var Node = function (val, next) {
  this.val = val;
  this.next = null;
};

const isPalindrome = (head) => {
  // account for edge cases
  if (head.next === null) return true;
  if (!head) return false;
  // create a result array
  let resultArr = [], reversed = [];
  let cur = head;
  // while a head is present in linked list
  while (cur) {
    // push head of linked list to result array and access next node in linked list
    resultArr.push(cur.val);
    reversed.push(cur.val);
    // push every next node of linked list to result array until complete
    cur = cur.next;
  }
  // if the reverse of result array equals result array
  reversed = reversed.reverse().join('')
  if (reversed === resultArr.join('')) {
    // return true
    return true
    // otherwise
  } else {
    // return false
    return false
  }
};

// Runtime: 270 ms, faster than 18.67% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 84 MB, less than 5.17% of JavaScript online submissions for Palindrome Linked List.


let nodeA = new Node(1);
let nodeB = new Node(2);
let nodeC = new Node(2);
let nodeD = new Node(1);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = null;
console.log(isPalindrome(nodeA)); // true

let nodeG = new Node(1);
let nodeK = new Node(2);

nodeG.next = nodeK;
nodeK.next = null;
console.log(isPalindrome(nodeG)); // false
