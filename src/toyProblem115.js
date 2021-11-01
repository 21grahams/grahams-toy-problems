/* 3Sum Closest 

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution */

// input: an array of integers, positive or negative and an integer that's a target number
// output: the sum of the three integers that sum closest to the target
// constaints: 3 <= nums.length <= 1000. -1000 <= nums[i] <= 1000. -104 <= target <= 104
// edge cases: none at this time
const threeSumClosest = (nums, target) => {
  
  /* we have to establish several things: 
    1. The closest number to the target given a combination of every three sets of integers
    2. A way to figure out what number is closest to target. Can we consider a range of numbers that the closest would fall within? Ex:
      exact = target
      withinOneUp = target + 1
      withinOneDown = target - 1
      withinTwoUp = target + 2
      withinTwoDown = target - 2
      etc
  */

};

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

console.log(threeSumClosest([0, 0, 0], 1)) // 0