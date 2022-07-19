/*
leetcode - Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/


// input: an array of unsorted integers
// output: an integer which represents the longest consecutive element sequence of the input array
// constraints: Must create an algorithm that runs in linear time complexity. 0 <= nums.length <= 105. -109 <= nums[i] <= 109
// edgecases: if array is empty, return null
const longestConsecutive = nums => {
  // account for edge case
  // sort nums input array
  // create a count, init to 0
  // loop over nums array
    // if current element plus one DOESN'T equal next element
      // assign count to 0
    // if current element plus one equals next element
      // increment count
  // return count
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9