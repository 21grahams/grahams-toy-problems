/* leetcode - Summary Ranges

You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b */

// input: an array of sorted integers
// output: a list of ranges, that consist of all of the numbers in the array and return the smallest sorted list of all the ranges
// constraints: 0 <= nums.length <= 20 | -2^31 <= nums[i] <= 2^31 - 1 All the values of nums are unique | nums is sorted in ascending order.
// edge cases: if the input array is empty, return an empty array. If input array contains one integer, return that integer
const summaryRanges = nums => {
  // account for edge cases

  // create a start variable, assign to null
  // create a result array

  // loop over input array
    // if start is equal to null
      // assign start to current element of input array
    // if current element of input array is equal to next element of input array minus one
      // continue
    // if current element of input array is equal to start
      // push current element onto result array and convert toString
      // assign start to null
    // otherwise
      // push template literal of start to current element onto result array
      // assign start to null

  // return result
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])) // ["0->2","4->5","7"]
/* explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7" */

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])) // ["0","2->4","6","8->9"]
/* explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9" */

console.log(summaryRanges([])) // []

console.log(summaryRanges([-1])) // ["-1"]

console.log(summaryRanges([0])) // [0]