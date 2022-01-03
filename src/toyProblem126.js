/* Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome */

// input: the head of a singly linked list
// output: a boolean, true if the singly linked list is a palindrome, false if not
// constraints: The number of nodes in the list is in the range [1, 105]. 0 <= Node.val <= 9
// edge cases: if head has one number only, return true. If head is empty, return false
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

console.log(isPalindrome([1, 2, 2, 1])) // true
console.log(isPalindrome([1, 2])) // false