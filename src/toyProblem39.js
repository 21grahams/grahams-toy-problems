/* leetcode problem

Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well
*/

// input: a singly linked list that could and likely will have duplicate values
// output: a sorted singly linked list that has no duplicate values
// constraints: list is guaranteed to already be sorted in ascending order
// edge cases: nothing at this time
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
};

const deleteDuplicates = (head) => {

  var length = 0;
  if (!head) {
      return undefined;
  }
  let current = head;
  let newHead = head.next;
      if (current.next.val === current.val) {
          current = newHead;
          head = current;
      }
  return head;
};

console.log(deleteDuplicates([1, 1, 2])); // [1, 2]
console.log(deleteDuplicates([1, 1, 2, 3, 3])); // [1, 2, 3]
