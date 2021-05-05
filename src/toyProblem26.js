// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// input: an array of nums
// output: an array of those nums with dropped duplicates
// constraints: do not allocate extra space for another array
// edge cases: none
var removeDuplicates = function(nums) {

  let masterArr = [];
  let newSet = new Set(nums);
  for (let key of newSet) {
      masterArr.push(key)
  }
  return masterArr.length;
};

console.log(removeDuplicates([1, 1, 2])) // [1, 2]
console.log(removeDuplicates([2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5])) // [2, 3, 4, 5, 6, 7, 32]