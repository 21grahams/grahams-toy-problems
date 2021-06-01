/* leetcode problem - Plus One

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit

You may assume the integer does not contain any leading zero, except the number 0 itself */

// input: an array of decimal digits, positive integers
// output: the same array with the head of the list incremented by one
// constraints: none at this time
// edge cases: return empty array if input is empty
const plusOne = (digits) => {
  let nines = true;
  if (digits.length === 0) return [];
  if (digits.length === 1 && digits[0] === 9) return [1, 0];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 8) {
      digits[i] = 0;
    } else {
      digits[i]++;
      nines = false;
      break;
    }
  }
  if (nines) digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([0])); // [1]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([9, 9])); // [1, 0, 0]
console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]