/* leetcode - Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order. */

// input: an m by x by n matrix (array of arrays)
// output: the matrix in spiral order
// constraints: m == matrix.length. n == matrix[i].length. 1 <= m, n <= 10. -100 <= matrix[i][j] <= 100
// edge cases: none at this time
const spiralOrder = matrix => {
  // create a resultArr
  // create a row var, assign to length of matrix
  // create a cols var, assign to length of matrix at index 0

  // loop over rows
    // push all values to resultArr
    // increment rows
    // push last value to resultArr
    // increment row
      // loop over rows decrementing
        // push values to resultArr
          // decrement row
          // push values at current level to resultArr, stopping before last value in row

  // return resultArr
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])) // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]