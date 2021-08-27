/* leetcode - Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order. */

// input: an m by x by n matrix (array of arrays)
// output: the matrix in spiral order
// constraints: m == matrix.length. n == matrix[i].length. 1 <= m, n <= 10. -100 <= matrix[i][j] <= 100
// edge cases: none at this time
const spiralOrder = matrix => {
  // create a rowStart var, assign to 0;
  let rowStart = 0, rowEnd = matrix.length -1, colStart = 0, colEnd = matrix[0].length - 1, resultArr = [];
  // create a rowEnd var, assign to last index in matrix row
  // create colStart var, assign to 0
  // create colEnd var, assign to last index in matrix col
  // create a resultArr

  // while rowStart is less than or equal to rowEnd and colStart is less than or equal to colEnd
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // loop over colEnd, set i to colStart, increment
    for (let i = colStart; i <= colEnd; i++) {
      // push matrix at rowStart current index to resultArr
      resultArr.push(matrix[rowStart][i])
    }
    // increment rowStart
    rowStart++;
    // loop over rowEnd, set i to rowStart, increment
    for (let i = rowStart; i <= rowEnd; i++) {
      // push matrix at colEnd current index to resultArr
      resultArr.push(matrix[i][colEnd]);
    }
    // decrement colEnd
    colEnd--;
    // if rowStart is less than or equal to rowEnd
    if (rowStart <= rowEnd) {
      // loop over colStart, set i to colEnd, decrement
      for (let i = colEnd; i >= colStart; i--) {
        // push matrix at rowEnd current index to resultArr
        resultArr.push(matrix[rowEnd][i]);
      }
      // decrement rowEnd
      rowEnd--;
    }
    // if colStart is less than or equal to colEnd
    if (colStart <= colEnd) {
      // loop over rowStart, set i to rowEnd, decrement
      for (let i = rowEnd; i >= rowStart; i--) {
        // push current element of matrix at colStart to resultArr
        resultArr.push(matrix[i][colStart])
      }
      // increment colStart
      colStart++;
    }
  }
  // return resultArr
  return resultArr;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])) // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]