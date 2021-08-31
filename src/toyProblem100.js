/* Write a function solution that, given an integer N, returns the maximum possible value obtainable by deleting one '5' digit from the decimal representation of N. It is guaranteed that N wil contain at least one '5' digit */

// input: a set of integers, could be positive or negative
// output: the same set of integers, with the removal of one '5', which returns the largest possible set of integers
// constraints: N contains at least one '5' always. N consists of at least two digits in decimal representation
// edge cases: none at this time
const solution = N => {
  // convert N to string
  // split string into an array of characters
  // create a resultArr1
  // create a resultArr2
  // create a seen bool, assign to false

  // loop over split
    // if current element is not 5
      // push to resultArr1

    // if current element equals 5 and seen is false
      // push to resultArr1
      // flip seen to true

  // flip seen to false
  // loop over split a second time
    // if current element is not 5
      // push to resultArr2

    // if current element is 5 and seen is true
      // push to resultArr2

    // if current element is 5
      // flip seen to true

  // return the highest value between resultArr1 and resultArr2
};

console.log(solution(15958)); // 1958

console.log(solution(-5859)); // -589

console.log(solution(-5000)); // 0