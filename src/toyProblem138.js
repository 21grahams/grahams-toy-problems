/*
leetcode - Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
*/

// input: an array of integers
// output: a boolean, true if the number of occurrences of each value in the array is unique, or false otherwise
// constraints: 1 <= arr.length <= 1000. -1000 <= arr[i] <= 1000
// edge cases: if array contains 0 or 1 integer(s), return true, as arr is unique
const uniqueOccurrences = (arr) => {
  // account for the edge cases
  if (arr.length === 0 || arr.length === 1) return true;
  // create an object
  let resultObj = {};
  // loop over the arr
  for (let i = 0; i < arr.length; i++) {
    // if current number of object doesn't exist
    if (resultObj[arr[i]] === undefined) {
      // assign that arr value to key of object and value to 1
      resultObj[arr[i]] = 1;
      // otherwise
    } else {
      // assign that arr value to key of object and increment value
      resultObj[arr[i]]++;
    }
  }
  // get an array of the values of the object
  let objValues = Object.values(resultObj);
  objValues.sort();
  for (let i = 0; i < objValues.length; i++) {
    if (objValues[i - 1] === objValues[i] || objValues[i] === objValues[i + 1]) {
      return false
    }
  }
  return true
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

console.log(uniqueOccurrences([1, 2])); // false

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true

console.log(uniqueOccurrences([26, 2, 16, 16, 5, 5, 26, 2, 5, 20, 20, 5, 2, 20, 2, 2, 20, 2, 16, 20, 16, 17, 16, 2, 16, 20, 26, 16])); // false