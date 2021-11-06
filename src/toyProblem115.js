/* 3Sum Closest 

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution */

// input: an array of integers, positive or negative and an integer that's a target number
// output: the sum of the three integers that sum closest to the target
// constaints: 3 <= nums.length <= 1000. -1000 <= nums[i] <= 1000. -104 <= target <= 104
// edge cases: none at this time
const threeSumClosest = (nums, target) => {
  // bruteforce pesudocode //

  // create a minDiffSum and minDiff, assign to infinity
  let minDiffSum = Infinity, minDiff = Infinity;

  // loop over input array
  for (let i = 0; i < nums.length; i++) {
    // loop a second time
    for (let j = i + 1; j < nums.length; j++) {
      // loop a third time
      for (let k = j + 1; k < nums.length; k++) {
        // create a sum var, assign to all three current elements
        let sum = nums[i] + nums[j] + nums[k];
        // create a diff var, assign to absolute value of sum minus target
        let diff = Math.abs(sum - target);
        // if the diff is less than minDiff
        if (diff < minDiff) {
          // assign minDiff to diff
          minDiff = diff;
          // assign minDiffSum to sum
          minDiffSum = sum;
        }
      }
    }
  }
  // return minDiffSum
  return minDiffSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

console.log(threeSumClosest([0, 0, 0], 1)) // 0