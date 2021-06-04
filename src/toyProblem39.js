/* leetcode problem

Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well
*/


// input: a singly linked list that could and likely will have duplicate values
// output: a sorted singly linked list that has no duplicate values
// constraints: list is guaranteed to already be sorted in ascending order
// edge cases: nothing at this time
const deleteDuplicates = head => {

  // access each node in the linkedList
  // if the current node matches the next node in the linked list
    // remove it
  // return linkedList
};

console.log(deleteDuplicates([1, 1, 2])) // [1, 2]
console.log(deleteDuplicates([1, 1, 2, 3, 3])) // [1, 2, 3]