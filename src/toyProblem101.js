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
  for (let i = 0; i < b.length; i++) {
    // increment sum to sumB
    sumB += b[i];
  }
  // loop over array A
  for (let i = 0; i < a.length; i++) {
    // loop over array B
    for (let j = 0; j < b.length; j++) {
      // if sumA is smaller than sumB
      if (sumA < sumB) {
        // find difference between sums, store to diff variable
        diff = sumB - sumA;
        // if array B at j minus array A at i is greater than 0 and less than or equal to 6
        // increment result
        if (b[j] - a[i] > 0 && b[j] - a[i] <= 6) result++;
        // else
        // return -1
        else return -1;
      }
      // if sumA is larger than sumB
      if (sumA > sumB) {
        // find difference between sums, store to diff variable
        diff = sumA - sumB;
        // if array A at i minus array B at j is greater than 0 and less than or equal to 6
        // increment result
        if (a[i] - b[j] > 0 && a[i] - b[j] <= 6) result++;
        // else
        // return -1
        else return -1;
      }
    }
  }
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
