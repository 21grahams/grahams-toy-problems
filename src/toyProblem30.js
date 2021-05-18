// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// input: two sorted linked lists
// output: one single sorted linked list of nums
// constraints: sorted in non-descreasing order
// edge cases:
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;

  let mergedHead = null;
  if (l1.data >= l2.data) {
      mergedHead = l1;
      l1 = l1.next;
  } else {
      mergedHead = l2;
      l2 = l2.next;
  }

  let mergedTail = mergedHead;

  while (l1 && l2) {
      let temp = null;
      if (l1.data <= l2.data) {
          temp = l1;
          l1 = l1.next;
      } else {
          temp = l2;
          l2 = l2.next;
      }
      mergedTail.next = temp;
      mergedTail = temp;
  }
  if (l1) {
      mergedTail.next = l1;
  } else if (l2) {
      mergedTail.next = l2;
  }
  return mergedHead;
};

console.log(mergeTwoLists([1, 2, 3], [1, 3, 4])) // [1,1,2,3,4,4]