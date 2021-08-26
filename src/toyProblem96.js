/* leetcode - Set Matrix Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place */

// input: an m, x and n matrix of integers
// output: the same matrix, although wherever the input matrix had a 0, the output must have that entire column and row contain 0's as well
// constraints: must return the matrix in place. m == matrix.length. n == matrix[0].length. 1 <= m, n <= 200. -2^31 <= matrix[i][j] <= 2^31 - 1
// edge cases: none at this time
const setZeroes = matrix => {
  // create a var for rows, assign to length of matrix
  // create a var for cols, assign to rows[0]
  // create a var for rowIndex, assign to a new Array, pass in rows and fill -1
  // create a var for colIndex, assign to a new Array, pass in cols and fill -1

  // traverse all elements of input matrix
    // if 0 is found, updated the indexes of rowIndex and colIndex to 0


  // traverse the matrix again
    // if there is 0 in either rowIndex or colIndex matrix and if data in origin input matrix is not 0, then change to 0
};


console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])) // [[1,0,1],[0,0,0],[1,0,1]]

console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])) // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]