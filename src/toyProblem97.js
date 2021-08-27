/* leetcode - Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order. */

// input: an m by x by n matrix (array of arrays)
// output: the matrix in spiral order
// constraints: m == matrix.length. n == matrix[i].length. 1 <= m, n <= 10. -100 <= matrix[i][j] <= 100
// edge cases: none at this time
const spiralOrder = matrix => {
  // do something
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])) // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]