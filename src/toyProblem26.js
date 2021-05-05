/* Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

*/

// input: an array of nums
// output: an array of those nums with dropped duplicates
// constraints: do not allocate extra space for another array
// edge cases: none
var removeDuplicates = function(nums) {

    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1, 1, 2])) // [1, 2]
console.log(removeDuplicates([2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5])) // [2, 3, 4, 5, 6, 7, 32]