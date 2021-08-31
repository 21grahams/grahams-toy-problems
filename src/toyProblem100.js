/* Write a function solution that, given an integer N, returns the maximum possible value obtainable by deleting one '5' digit from the decimal representation of N. It is guaranteed that N wil contain at least one '5' digit */

// input: a set of integers, could be positive or negative
// output: the same set of integers, with the removal of one '5', which returns the largest possible set of integers
// constraints: N contains at least one '5' always. N consists of at least two digits in decimal representation
// edge cases: none at this time
const solution = (N) => {
  // convert N to string
  let string = N.toString();
  // split string into an array of characters
  let split = string.split("");
  // create a resultArr1
  let resultArr1 = [];
  // create a resultArr2
  let resultArr2 = [];
  // create a seen bool, assign to false
  let seen = false;

  // loop over split
  for (let i = 0; i < split.length; i++) {
    // if current element is not 5
    // push to resultArr1
    if (split[i] !== "5") resultArr1.push(split[i]);
    // if current element equals 5 and seen is false
    if (split[i] === "5" && seen === false) {
      // push to resultArr1
      resultArr1.push(split[i]);
      // flip seen to true
      seen = true;
    }
  }
  // flip seen to false
  seen = false;
  // loop over split a second time
  for (let i = 0; i < split.length; i++) {
    // if current element is not 5
    // push to resultArr2
    if (split[i] !== "5") resultArr2.push(split[i]);
    // if current element is 5 and seen is true
    // push to resultArr2
    if (split[i] === "5" && seen) resultArr2.push(split[i]);
    // if current element is 5
    // flip seen to true
    if (split[i] === "5") seen = true;
    // return the highest value between resultArr1 and resultArr2
  }
  let final =
    Number(resultArr1.join("")) > Number(resultArr2.join(""))
      ? Number(resultArr1.join(""))
      : Number(resultArr2.join(""));
  if (final === -0) {
    return 0;
  } else {
    return final;
  }
};

console.log(solution(15958)); // 1958
console.log(solution(-5859)); // -589
console.log(solution(-5000)); // 0
