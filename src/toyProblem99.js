/* given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A */


// input: an array of integers. Could be positive or negative
// output: a single integer, which represents the smallest positive integer that doesn't occur in input array A
// constraints: none at this time
// edge cases: none at this time
const solution = A => {
  // create a sort to sort through only positive values
  // create a var x, assign to 1

  // loop over A
    // if we find a smaller number, no need to continue, cause array is sorted, return x
    // assign x to current element at current index of A plus 1

  // return x
};

console.log(solution([1, 3, 6, 4, 1, 2])) // 5

console.log(solution([1, 2, 3])) // 4

console.log(solution([-1, -3])) // 1