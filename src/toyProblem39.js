/* leetcode problem

Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well
*/

// input: a singly linked list that could and likely will have duplicate values
// output: a sorted singly linked list that has no duplicate values
// constraints: list is guaranteed to already be sorted in ascending order
// edge cases: nothing at this time
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const deleteDuplicates = (head) => {
  // create two references to head
  // temp will iterate through entire linked list
  // prev will point towards the first occurrence of every element
  var temp = head,
    prev = head;

  // traverse list until the last node
  while (temp !== null) {
    // compare values of both pointers
    // if the value of previous is not equal to the value of temp, that means there are no more occurrences of the prev val. So set next of prev to temp node
    if (prev.val !== temp.val) {
      prev.next = temp;
      prev = temp;
    }
    // Set the temp to the next node
    temp = temp.next;
  }
  // Create edge case if there are more than one occurrence of the last element
  if (prev !== temp) {
    prev.next = null;
  }
  // return linkedList
  return head;
};

console.log(deleteDuplicates([1, 1, 2])); // [1, 2]
console.log(deleteDuplicates([1, 1, 2, 3, 3])); // [1, 2, 3]
