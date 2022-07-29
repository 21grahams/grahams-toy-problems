/*
leetcode - Maximum Product After K Increments

You are given an array of non-negative integers nums and an integer k. In one operation, you may choose any element from nums and increment it by 1.

Return the maximum product of nums after at most k operations. Since the answer may be very large, return it modulo 10^9 + 7. Note that you should maximize the product before taking the modulo. 
*/

// input: an array of non negative integers and an integer (k) which represents the amount you can increment any of the nums in array
// output: a single integer, representing the largest possible product of the nums in the input array
// constraints: 1 <= nums.length, k <= 105. 0 <= nums[i] <= 106
// edge cases: not necessarily an edge case but ensure no number stays at 0, or product becomes 0
const maximumProduct = (nums, k) => {
  // do something
}

console.log(maximumProduct([0, 4], 5)) // 20
/* Explanation: Increment the first number 5 times.
Now nums = [5, 4], with a product of 5 * 4 = 20.
It can be shown that 20 is maximum product possible, so we return 20.
Note that there may be other ways to increment nums to have the maximum product.
*/

console.log(maximumProduct([6, 3, 3, 2], 2)) // 216
/* Explanation: Increment the second number 1 time and increment the fourth number 1 time.
Now nums = [6, 4, 3, 3], with a product of 6 * 4 * 3 * 3 = 216.
It can be shown that 216 is maximum product possible, so we return 216.
Note that there may be other ways to increment nums to have the maximum product.
*/