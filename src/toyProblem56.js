/* leetcode - Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false */

// input: a singly-linked list
// output: a bool. True if there is a cycle in the linked list. False if not
// constraints: The number of the nodes in the list is in the range [0, 10^4]. || 10^5 <= Node.val <= 10^5 || pos is -1 or a valid index in the linked-list.
// edge cases: if linked list is empty, return false
const hasCycle = (head) => {
  // create a slow node pointer and a fast node pointer
  let slow = head;
  let fast = head;

  // while the two pointers exist and the fast pointer has a next value
  while (slow && fast && fast.next) {
    // move the slow pointer by one node and the fast pointer by two nodes
    slow = slow.next;
    fast = fast.next.next;
    // if the slow pointer and the fast pointer are equal
    if (slow === fast) {
      // linked list contains a cycle, return true
      return true;
    }
  }
  // return false if cycle has never been found
  return false;
};

// Runtime: 76 ms, faster than 96.18% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 41.3 MB, less than 51.02% of JavaScript online submissions for Linked List Cycle.

console.log(hasCycle([3, 2, 0, -4])); // true

console.log(hasCycle([1, 2])); // true

console.log(hasCycle([1])); // false
