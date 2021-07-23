/* leetcode - Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity? */

// Input: an array of integers containing n distinct numbers in a range [0, n]
// Output: A single integer which is the only number in the range missing from the array
// Constaints: n == nums.length | 1 <= n <= 10^4 | 0 <= nums[i] <= n | All the numbers of nums are unique.
// Edge Cases: if the nums array is empty, return null. if nums contains just 0, return 1
const missingNumber = nums => {
  // account for edge case
  // create a finalNum, assign to 0

  // collect the length of the input array and assign to numLength
  // loop over the input array up to numLength
    // if the next element is not one plus the current element
      // assign finalNum to that index
    // if last element is one less than length of array
      // assign finalNum to that last index

  // return finalNum
};

console.log(missingNumber([3, 0, 1])) // 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([0, 1]) // 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([0])) // 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.