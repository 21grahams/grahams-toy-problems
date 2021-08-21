/* count SubArrays

Given an array of integers and a target value, return the maximum number of subarrays that sum to equal the target number */

// input: an array of positive integers and a target value represented as a positive integer
// output: a single integer, which represents the amount of subarrays that sum to the target value
// constraints: all integers will be positive
// edge cases: if there are no numbers in the input array, return 0. If there is no target number, return null
const subArrays = (nums, target) => {
  // account for edge cases
  // create a sum variable, assign to 0
  // create a result, assign to 0

  // loop over array to use as a pointer
    // reset sum
    // loop over array a second time starting at i index
      // if sum plus current element equals 100
        // increment result
      // otherwise
        // increment sum and current element

  // return result
};

console.log(subArray([1, 5, 15, 25, 25, 50, 100], 100)) // 2
// explanation: [ [25, 25, 50], [100] ]

console.log(subArray([], 100)) // 0

console.log(subArray([1, 5, 15, 25, 25, 50, 100], 0)) // null

sum = 50
result = 1
nums = [1, 5, 15, 25, 25, 50, 10]
target = 100
i = 3
j = 5