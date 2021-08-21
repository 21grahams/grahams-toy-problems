/* count SubArrays

Given an array of integers and a target value, return the maximum number of subarrays that sum to equal the target number */

// input: an array of positive integers and a target value represented as a positive integer
// output: a single integer, which represents the amount of subarrays that sum to the target value
// constraints: all integers will be positive
// edge cases: if there are no numbers in the input array, return 0. If there is no target number, return null
const subArrays = (nums, target) => {
  // account for edge cases
  if (nums.length === 0) return 0;
  if (target === 0) return null;
  // create a sum variable, assign to 0
  let sum = 0;
  // create a result, assign to 0
  let result = 0;

  // loop over array to use as a pointer
  for (let i = 0; i < nums.length; i++) {
    // reset sum
    sum = 0;
    // loop over array a second time starting at i index
    for (let j = i; j < nums.length; j++) {
      // if sum plus current element equals target
      if (sum + nums[j] === target) {
        // increment result
        result++;
        // break
        break;
      }
      // otherwise
      else {
        // increment sum and current element
        sum += nums[j];
      }
    }
  }
  // return result
  return result;
};

console.log(subArrays([1, 5, 15, 25, 25, 50, 100], 100)); // 2
// explanation: [ [25, 25, 50], [100] ]

console.log(subArrays([], 100)); // 0

console.log(subArrays([1, 5, 15, 25, 25, 50, 100], 0)); // null

// sum = 50
// result = 1
// nums = [1, 5, 15, 25, 25, 50, 10]
// target = 100
// i = 3
// j = 5
