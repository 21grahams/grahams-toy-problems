/* leetcode -Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null */

// input: the heads pf two unsorted linked lists
// output: the specific node (val) in which both of these linked lists intersect
// constraints: there are no cycles anywhere in the entire linked structure. Linked lists must retain their original structure after the function returns
// edge cases:  If the two linked lists do not intersect, then return null
class ListNode() {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getIntersectionNode = (headA, headB) => {
  // account for edge case
  // create a finalNum

  // create a current variable, assign to headA
  // create a current variable, assign to headB

  // while current exists for both heads
    // if both currents next property exist
      // check if their vals are equal. If so
        // assign finalNum var to value
    // if none are equal, return null

  // return finalNum
};

console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5])) // 8
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4])) // 2
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

console.log(getIntersectionNode([2, 6, 4], [1, 5])) // null
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

