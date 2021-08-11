/* leetcode - Max Consecutive Ones

Given a binary array nums, return the maximum number of consecutive 1's in the array */

// input: an array of integers, appearing to all be positive
// output: a single number, which represents the max amount of consecutive 1's in the array
// constraints: 1 <= nums.length <= 10^5. nums[i] is either 0 or 1.
// edge cases: if input array is empty, return 0
const findMaxConsecutiveOnes = (nums) => {
  // account for edge case
  if (nums.length === 0) return 0;

  // create a count variable, set to 0
  let count = 0;
  // create a max variable, set to 0
  let max = 0;

  // loop over the input array, start at index 0
  for (let i = 0; i < nums.length; i++) {
    // while current number is 1
    while (nums[i] === 1) {
      // increment count
      count++;
      // increment index
      i++;
    }
    // if count is greater than max
    // assign max to count
    if (count > max) max = count;
    // reset count to 0
    count = 0;
  }
  // return max
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
