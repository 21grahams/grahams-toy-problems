/*
leetcode - Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

// input: an array of unsorted integers
// output: an integer which represents the longest consecutive element sequence of the input array
// constraints: Must create an algorithm that runs in linear time complexity. 0 <= nums.length <= 105. -109 <= nums[i] <= 109
// edgecases: if array is empty, return 0
const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  let count = 1, max = 1;
  
  nums = nums.sort((a, b) => a - b);
  nums = [...new Set(nums)];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      count++
      max = Math.max(max, count)
    } 
    else count = 1
  }
  
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
// 0, 0, 1, 2, 3, 4, 5, 6, 7, 8

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7
// -1, -1, 0, 1, 3, 4, 5, 6, 7, 8, 9
