/* leetcode - Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false */

// input: a singly-linked list
// output: a bool. True if there is a cycle in the linked list. False if not
// constraints: The number of the nodes in the list is in the range [0, 10^4]. || 10^5 <= Node.val <= 10^5 || pos is -1 or a valid index in the linked-list.
// edge cases: if linked list is empty, return false
const hasCycle = (head) => {
  // account for edge case
  if (!head) return false;

  // while a head exists
  while (head) {
    // if head.next exists and pos equals the val of head.next
    if (head.next && pos === head.next.val) {
      // return true
      return true;
      // otherwise
    } else {
      // continue
      continue;
    }
    // if head.next doesn't exist, break out of while loop
    if (!head.next) break;
  }
  // return false
  return false;
};

console.log(hasCycle([3, 2, 0, -4])); // true

console.log(hasCycle([1, 2])); // true

console.log(hasCycle([1])); // false
