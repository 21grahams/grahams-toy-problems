/*
leetcode -  The k Strongest Values in an Array

Given an array of integers arr and an integer k.

A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array.
If |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j] if arr[i] > arr[j].

Return a list of the strongest k values in the array. return the answer in any arbitrary order.

Median is the middle value in an ordered integer list. More formally, if the length of the list is n, the median is the element in position ((n - 1) / 2) in the sorted list (0-indexed).

For arr = [6, -3, 7, 2, 11], n = 5 and the median is obtained by sorting the array arr = [-3, 2, 6, 7, 11] and the median is arr[m] where m = ((5 - 1) / 2) = 2. The median is 6.
For arr = [-7, 22, 17, 3], n = 4 and the median is obtained by sorting the array arr = [-7, 3, 17, 22] and the median is arr[m] where m = ((4 - 1) / 2) = 1. The median is 3.

*/

// input: an array of integers and a single integer, k which represents the amount of strong numbers to return in output
// output: an array of integers, the number of integers depends on the number of input, k
// constraints: 1 <= arr.length <= 105. -105 <= arr[i] <= 105. 1 <= k <= arr.length
// edge cases: if k is 0, return an empty array
const getStrongest = (arr, k) => {
  // account for edge case
  // create a finalArr
  // find the median of each input arr and store in median variable
  // loop over arr twice
  // if length of finalArr is less than k
    // if arr[i] minus median is greater than arr[j]
      // push arr[i] onto finalArr
    // otherwise if arr[i] minus median is equal to arr[j]
      // if arr[i] is greater than arr[j]
        // push arr[i] onto finalArr
      // otherwise
        // push arr[j] onto finalArr
  // return finalArr
};

console.log(getStrongest([1, 2, 3, 4, 5], 2)) // [5, 1]
// Explanation: Median is 3, the elements of the array sorted by the strongest are [5,1,4,2,3]. The strongest 2 elements are [5, 1]. [1, 5] is also accepted answer.
// Please note that although |5 - 3| == |1 - 3| but 5 is stronger than 1 because 5 > 1.

console.log(getStrongest([1, 1, 3, 5, 5], 2)) // [5, 5]
// Explanation: Median is 3, the elements of the array sorted by the strongest are [5,5,1,1,3]. The strongest 2 elements are [5, 5].

console.log(getStrongest([6, 7, 11, 7, 6, 8], 5)) // [11, 8, 6, 6, 7]
// Explanation: Median is 7, the elements of the array sorted by the strongest are [11,8,6,6,7,7].
// Any permutation of [11,8,6,6,7] is accepted.