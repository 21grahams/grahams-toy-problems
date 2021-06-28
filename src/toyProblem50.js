/* leetcode - Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned) */

// input: a series of numbers, positive or negative
// output: that same series of numbers reversed
// constraints: -231 <= x <= 231 - 1
// edge cases: If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0, if no num given as input, return null, if last digit is 0, remove
const reverse = (x) => {
  if (x === null) return null;
  if (x === 0) return 0;

  let masterArr = [];

  let arr = x.toString().split("");

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "0" && arr[i + 1] !== "0" && arr[i - 1] !== "0") {
      masterArr.push(arr[i]);
    } else if (arr[i] === "-") {
      masterArr.unshift(arr[i]);
    } else {
      masterArr.push(arr[i]);
    }
  }
  return Number(masterArr.join(""));
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
