/* There are two sets of traditional six-faced dice, represented by two arrays A and B consisting of N and M integers respectively. Each array element has a value between 1 and 6, inclusive, representing the value of the corresponding die

Write a function that given two arrays A and B, returns the minimum number of dice to be turned in order to make the sums of dice in both sets equal, or -1 if that is not possible */

// input: two different dies (dices), represented as an array each, A and B, consisting of N and M integers respectively
// output: a number which represents the minimum number of dice to be turned in order to make the sums of dice in both sets equal
// constraints: N and M are integers within the range [1-100,000]. Each element of arrays A, B is an integer within the range [1, 6]
// edge cases: if it's not possible to sum dice up to be equal, return -1
const dice = (nums1, nums2) => {
  // if length of nums1 * 6 is less than length of nums2 OR length of nums2 * 6 is less than length of nums1
    // making dice sum equally is not possible, return -1

  // create one var, assign to reduce of sum of nums1
  // create two var, assign to reduce of sum of nums1

  // if two is greater than one, set [one, two] to equal [two, one], [nums1, nums2] = [nums2, nums1]
  // sort nums1 and nums 2
  // create a var for i and j, assign each to 0
  // while one is greater than two
    // if current element at nums 1 - 1 is greater than 6 minus current element at nums2 OR j is equal to length of nums2
      // assign one as decrementing current element of nums1 - 1, and increment i
  // otherwise
    // increment 2 plus 6 minus current element of nums2 at j, increment j

  // return i + j
};

console.log(dice([5], [1, 1, 6])); // 1
// explanation: we have to turn the third die in B from 6 to 3; then the arrays will have the same sums (5 = 1 + 1 + 3)

console.log(dice([2, 3, 1, 1, 2], [5, 4, 6])); // 2
// explanation: we can turn last two dice in B to get [5, 1, 3]; then the arrays will have the same sums

console.log(dice([5, 4, 1, 2, 6, 5], [2])); // 6
// explanation: we can turn five dice in A to get [1, 1, 1, 1, 1, 1] and one dice in B to get [6]; then then arrays will have the same sums

console.log(dice([1, 2, 3, 4, 3, 2, 1], [6])); // -1
// explanation: not possible for the arrays to have the same sums