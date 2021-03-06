/* leetcode Two Sum 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order */

// naive solution first //
// const twoSum = (nums, target) => {

//   // create result array
//   const resultArr = [];
//   // loop over array
//   for (let i = 0; i < nums.length; i++) {
//       // loop over array a second time with i + 1 as index
//       for (let j = i + 1; j < nums.length; j++) {
//           // if current index of i plus current index of j equals target
//           // push indices of i and j to result array
//           if (nums[i] + nums[j] === target) resultArr.push(i, j);
//       }
//     }
//   // return result array
//   return resultArr;
// };

// Runtime: 189 ms, faster than 16.82% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.2 MB, less than 89.44% of JavaScript online submissions for Two Sum.

// optimized solution
const twoSum = (nums, target) => {
  const newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (newMap.has(diff)) return [newMap.get(diff), i];
    newMap.set(num, i);
  }
};

// Runtime: 145 ms, faster than 32.76% of JavaScript online submissions for Two Sum.
// Memory Usage: 40.8 MB, less than 30.71% of JavaScript online submissions for Two Sum.

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
// explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

console.log(twoSum([3, 2, 4], 6)) // [1, 2]

console.log(twoSum([3, 3], 6)) // [0, 1]