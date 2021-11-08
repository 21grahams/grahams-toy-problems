/* 3Sum Closest 

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution */

// input: an array of integers, positive or negative and an integer that's a target number
// output: the sum of the three integers that sum closest to the target
// constaints: 3 <= nums.length <= 1000. -1000 <= nums[i] <= 1000. -104 <= target <= 104
// edge cases: none at this time
const threeSumClosest = (nums, target) => {
  // two pointer method //

  // sort input array
  // set minDiff and minDiffSum to Infinity

  // loop over input array
    // set a j var, assign to i + 1
    // set a k var, assign to last index of input array

    // while j is less than k
      // create a sum var, assign to current val of nums and i, j and k
      // create a diff var, assign to absolute value of sum minus target

      // if diff is less than minDiff
        // assign minDiff to diff
        // assign minDiffSum to sum

      // if sum is less than target
        // increment j
      // otherwise
        // decrement k

  // return minDiffSum
};

// Runtime: 180 ms, faster than 15.77% of JavaScript online submissions for 3Sum Closest.
// Memory Usage: 39.5 MB, less than 94.53% of JavaScript online submissions for 3Sum Closest.

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

console.log(threeSumClosest([0, 0, 0], 1)) // 0