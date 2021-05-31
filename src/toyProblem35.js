/* leetcode problem

Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum */

const maxSubArray = (nums) => {
  // account for edge cases
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  // create a count
  let count = 0;
  // create a maxCountSoFar
  let maxCountSoFar = 0;
  // loop over nums array
  for (let i = 0; i < nums.length; i++) {
    // add the current element to count
    count += nums[i];
    // if the count is larger than maxCountSoFar
    if (count > maxCountSoFar) {
      // set MaxCountSoFar to count
      maxCountSoFar = count;
    }
    // if count is less than 0
    if (count < 0) {
      // reassign to 0 and restart
      count = 0;
    }
  }
  // return count
  return maxCountSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
