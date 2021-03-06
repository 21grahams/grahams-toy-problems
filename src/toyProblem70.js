/* leetcode - Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity? */

// Input: an array of integers containing n distinct numbers in a range [0, n]
// Output: A single integer which is the only number in the range missing from the array
// Constaints: n == nums.length | 1 <= n <= 10^4 | 0 <= nums[i] <= n | All the numbers of nums are unique.
// Edge Cases: if the nums array is empty, return null. if nums contains just 0, return 1
const missingNumber = nums => {

  // create a max, assign to total length of input array
  let max = nums.length;
  // create a total, assign to 0
  let total = 0;

  // loop over the nums input array, up to max
  for (let i = 1; i <= max; i++) {
    // increment total by the index
    total += i;
  }

  // loop over nums with for of
  for (let num of nums) {
    // decrement total by num
    total -= num;
  }
  // return total
  return total;
};

// Runtime: 80 ms, faster than 82.56% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.9 MB, less than 17.67% of JavaScript online submissions for Missing Number.

console.log(missingNumber([3, 0, 1])) // 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([0, 1])) // 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([0])) // 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.