/* count SubArrays

Given an array of integers and a target value, return the maximum number of subarrays that sum to equal the target number */

// input: an array of positive integers and a target value represented as a positive integer
// output: a single integer, which represents the amount of subarrays that sum to the target value
// constraints: all integers will be positive
// edge cases: if there are no numbers in the input array, return 0. If there is no target number, return null
const subArrays = (nums, target) => {

  if (nums.length === 0) return 0;
  if (target === 0) return null;

  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - target)) count += map.get(sum - target);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  return count;
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
