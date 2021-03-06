/* leetcode -Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null */

// input: the heads pf two unsorted linked lists
// output: the specific node (val) in which both of these linked lists intersect
// constraints: there are no cycles anywhere in the entire linked structure. Linked lists must retain their original structure after the function returns
// edge cases:  If the two linked lists do not intersect, then return null
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

const getIntersectionNode = (headA, headB) => {
  // account for edge case
  if (!headA && !headB) return null;

  // create a variable for headA
  let curr1 = headA;
  // create a variable for headB
  let curr2 = headB;

  // while curr1 is not equal to curr2
  while (curr1 !== curr2) {
    // set curr1 equal to curr1.next
      curr1 = curr1.next;
    // set curr2 equal to curr2.next
      curr2 = curr2.next;

    // if curr1 equals curr2
      if (curr1 === curr2) {
      // return curr1
        return curr1;
      }
    // if curr1 is equal to null
      if (curr1 === null) {
      // set curr1 equal to headB
        curr1 = headB;
      }
    // if curr2 is equal to null
      if (curr2 === null) {
      // set curr2 equal to headA
          curr2 = headA;
      }
  }
  // return curr1
  return curr1;
};

// Runtime: 124 ms, faster than 25.68% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 45 MB, less than 99.49% of JavaScript online submissions for Intersection of Two Linked Lists.

console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5])) // 8
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4])) // 2
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

console.log(getIntersectionNode([2, 6, 4], [1, 5])) // null
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

