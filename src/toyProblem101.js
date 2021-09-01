/* There are two sets of traditional six-faced dice, represented by two arrays A and B consisting of N and M integers respectively. Each array element has a value between 1 and 6, inclusive, representing the value of the corresponding die

Write a function that given two arrays A and B, returns the minimum number of dice to be turned in order to make the sums of dice in both sets equal, or -1 if that is not possible */

// input: two different dies (dices), represented as an array each, A and B, consisting of N and M integers respectively
// output: a number which represents the minimum number of dice to be turned in order to make the sums of dice in both sets equal
// constraints: N and M are integers within the range [1-100,000]. Each element of arrays A, B is an integer within the range [1, 6]
// edge cases: if it's not possible to sum dice up to be equal, return -1
const dice = (a, b) => {
  // create an sumA var, assign to 0
  // create an sumB var, assign to 0
  // create a diff var, assign to 0
  // create a result var, assign to 0
  let sumA = 0, sumB = 0, diff = 0, result = 0;

  // loop through array A
  for (let i = 0; i < a.length; i++) {
    // increment sum to sumA
    sumA += a[i];
  }
  // loop through array B
  for (let i = 0; i < b.length; i++) {
    // increment sum to sumB
    sumB += b[i];
  }
  // while sums are not the same
    // get max element from larger array, get min element from smaller array
    // determine which has more "potential" to equalize the sum, e.g. a 5 in the "larger" array can be changed to 1, or a 3 in the smaller array can be changed to 6
    // pick the element that has more "potential" and change it (all the way to 1 or 6, or as needed)

    // return result
  return result;
};

console.log(dice([5], [1, 1, 6])); // 1
// explanation: we have to turn the third die in B from 6 to 3; then the arrays will have the same sums (5 = 1 + 1 + 3)

console.log(dice([2, 3, 1, 1, 2], [5, 4, 6])); // 2
// explanation: we can turn last two dice in B to get [5, 1, 3]; then the arrays will have the same sums

console.log(dice([5, 4, 1, 2, 6, 5], [2])); // 6
// explanation: we can turn five dice in A to get [1, 1, 1, 1, 1, 1] and one dice in B to get [6]; then then arrays will have the same sums

console.log(dice([1, 2, 3, 4, 3, 2, 1], [6])); // -1
// explanation: not possible for the arrays to have the same sums
