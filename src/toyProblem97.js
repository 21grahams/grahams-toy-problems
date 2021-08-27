/* leetcode - Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order. */

// input: an m by x by n matrix (array of arrays)
// output: the matrix in spiral order
// constraints: m == matrix.length. n == matrix[i].length. 1 <= m, n <= 10. -100 <= matrix[i][j] <= 100
// edge cases: none at this time
const spiralOrder = matrix => {
  // create a rowStart var, assign to 0;
  // create a rowEnd var, assign to last index in matrix row
  // create colStart var, assign to 0
  // create colEnd var, assign to last index in matrix col
  // create a resultArr

  // while rowStart is less than or equal to rowEnd and colStart is less than or equal to colEnd
    // loop over colEnd, set i to colStart, increment
      // push matrix at rowStart current index to resultArr
    // increment rowStart

    // loop over rowEnd, set i to rowStart, increment
      // push matrix at colEnd current index to resultArr
    // decrement colEnd

    // if rowStart is less than or equal to rowEnd
      // loop over colStart, set i to colEnd, decrement
        // push matrix at rowEnd current index to resultArr
      // decrement rowEnd

    // if colStart is less than or equal to colEnd
      // loop over rowStart, set i to rowEnd, decrement
        // push current element of matrix at colStart to resultArr
      // increment colStart


  // return resultArr
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])) // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]