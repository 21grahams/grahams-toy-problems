/* leetcode - Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity
*/

// input: a sorted array of nums, and a target num
// output: a num, which is the index of the target number
// constraints: linear time complexity
// edge cases: if target value doesn't exist in array of nums, return the position it would be in
const searchInsert = (nums, target) => {
  // loop over nums
  // if target equals currentNum
  // return index
  // else if target is greater than currentNum && less than currentNum plus one
  // return index
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1], 0)); // 0