/* There are two sets of traditional six-faced dice, represented by two arrays A and B consisting of N and M integers respectively. Each array element has a value between 1 and 6, inclusive, representing the value of the corresponding die

Write a function that given two arrays A and B, returns the minimum number of dice to be turned in order to make the sums of dice in both sets equal, or -1 if that is not possible */

// input: two different dies (dices), represented as an array each, A and B, consisting of N and M integers respectively
// output: a number which represents the minimum number of dice to be turned in order to make the sums of dice in both sets equal
// constraints: N and M are integers within the range [1-100,000]. Each element of arrays A, B is an integer within the range [1, 6]
// edge cases: if it's not possible to sum dice up to be equal, return -1

// const dice = (nums1, nums2) => {
//   // if length of nums1 * 6 is less than length of nums2 OR length of nums2 * 6 is less than length of nums1
//     // making dice sum equally is not possible, return -1
//     if (nums1.length * 6 < nums2.length || nums2.length * 6 < nums1.length) return -1;

//   // create one var, assign to reduce of sum of nums1
//   // create two var, assign to reduce of sum of nums1
//   let one = nums1.reduce((a, b) => a + b);
//   let two = nums2.reduce((a, b) => a + b);

//   // if two is greater than one, set [one, two] to equal [two, one], [nums1, nums2] = [nums2, nums1]
//   if (two > one) [one, two] = [two, one], [nums1, nums2] = [nums2, nums1];
//   // sort nums1 and nums 2
//   nums1.sort((a, b) => b - a);
//   nums2.sort((a, b) => a - b);

//   // create a var for i and j, assign each to 0
//   let i = 0, j = 0;

//   // while one is greater than two
//   while (one > two) {
//     // if current element at nums 1 - 1 is greater than 6 minus current element at nums2 OR j is equal to length of nums2
//     if (nums1[i] - 1 > 6 - nums2[j] || j === nums2.length) {
//       // assign one as decrementing current element of nums1 - 1, and increment i
//       one -= nums1[i] - 1;
//       i++;
//       // otherwise
//     } else {
//       // increment 2 plus 6 minus current element of nums2 at j, increment j
//       two += 6 - nums2[j];
//       j++;
//     }
//   }
//   // return i + j
//   return i + j;
// };

// Runtime: 299 ms, faster than 10.00% of JavaScript online submissions for Equal Sum Arrays With Minimum Number of Operations.
// Memory Usage: 55.8 MB, less than 40.00% of JavaScript online submissions for Equal Sum Arrays With Minimum Number of Operations.

const dice = (nums1, nums2) => {
  /*
    Two impossible cases:
    min1...max1 ... min2...max2 -> we can't make them equal
    min2...max2 ... min1...max1 -> we can't make them equal
    */
  let min1 = nums1.length * 1;
  let max1 = nums1.length * 6;
  let min2 = nums2.length * 1;
  let max2 = nums2.length * 6;
  if (min2 > max1 || min1 > max2) {
    return -1;
  }
  let sum1 = nums1.reduce((acc, cur) => acc + cur);
  let sum2 = nums2.reduce((acc, cur) => acc + cur);
  if (sum1 === sum2) return 0;
  if (sum1 < sum2) {
    return helper(nums1, nums2, sum1, sum2);
  } else {
    return helper(nums2, nums1, sum2, sum1);
  }
  // T.C: O(M + N), M = # of nums1, N = # of nums2
  // S.C: O(1)
};

// Condition: sum of A < sum of B
// the idea is to add the maximum possible value to sumA and
// subtract the maximum possible value from sumB so that
// we make sumA >= sumB as soon as possible
function helper(A, B, sumA, sumB) {
  let freqA = new Array(7).fill(0);
  let freqB = new Array(7).fill(0);
  for (let i = 0; i < A.length; i++) {
    freqA[A[i]]++;
  }
  for (let i = 0; i < B.length; i++) {
    freqB[B[i]]++;
  }
  let count = 0;
  for (let i = 1; i <= 6; i++) {
    // increase sumA
    while (freqA[i] > 0 && sumA < sumB) {
      sumA += 6 - i;
      freqA[i]--;
      count++;
    }
    let j = 7 - i;
    // decrease sumB
    while (freqB[j] > 0 && sumA < sumB) {
      sumB -= j - 1;
      freqB[j]--;
      count++;
    }
    if (sumA >= sumB) break;
  }
  return count;
}

// Runtime: 174 ms, faster than 80.00% of JavaScript online submissions for Equal Sum Arrays With Minimum Number of Operations.
// Memory Usage: 49.2 MB, less than 70.00% of JavaScript online submissions for Equal Sum Arrays With Minimum Number of Operations.

console.log(dice([5], [1, 1, 6])); // 1
// explanation: we have to turn the third die in B from 6 to 3; then the arrays will have the same sums (5 = 1 + 1 + 3)

console.log(dice([2, 3, 1, 1, 2], [5, 4, 6])); // 2
// explanation: we can turn last two dice in B to get [5, 1, 3]; then the arrays will have the same sums

console.log(dice([5, 4, 1, 2, 6, 5], [2])); // 6
// explanation: we can turn five dice in A to get [1, 1, 1, 1, 1, 1] and one dice in B to get [6]; then then arrays will have the same sums

console.log(dice([1, 2, 3, 4, 3, 2, 1], [6])); // -1
// explanation: not possible for the arrays to have the same sums
