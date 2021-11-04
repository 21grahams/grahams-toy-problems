/* 3Sum Closest 

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution */

// input: an array of integers, positive or negative and an integer that's a target number
// output: the sum of the three integers that sum closest to the target
// constaints: 3 <= nums.length <= 1000. -1000 <= nums[i] <= 1000. -104 <= target <= 104
// edge cases: none at this time
const threeSumClosest = (nums, target) => {

  // create closestToTarget variable
  // create sum var, assign to 0
  let closestToTarget = 0, sum = 0;

  // sort input array then loop
    // collect sum of first three values
      // store in closestToTarget variable
        // repeat process for all combinations of 3 ints
        // if any three ints are closer to target
          // add those 3 to sum
  
  // return sum
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

console.log(threeSumClosest([0, 0, 0], 1)) // 0