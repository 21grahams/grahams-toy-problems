/* leetcode - Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation */

// input: a 2d n x n matrix of integers
// output: the same matrix rotated 90 degrees clockwise
// constraints: matrix.length == n. matrix[i].length == n. 1 <= n <= 20. -1000 <= matrix[i][j] <= 1000
// edge cases: if matrix contains just one integer (this a 1x1 matrix), return the matrix with just that number
const rotate = matrix => {
  // reverse matrix
  matrix.reverse();

  // loop over outer matrix
  for (let i = 0; i < matrix.length; i++) {
    // loop over inner matrix
    for (let j = 0; j < i; j++) {
      // create a switch var, assign to matrix at current index of i and j
      let switched = matrix[i][j];
      // assign matrix at i and j to matrix at j and i
      matrix[i][j] = matrix[j][i];
      // assign matrix and j and i to switch
      matrix[j][i] = switched;
    }
  }
  // return matrix
  return matrix;
};

// Runtime: 56 ms, faster than 99.77% of JavaScript online submissions for Rotate Image.
// Memory Usage: 39.2 MB, less than 31.59% of JavaScript online submissions for Rotate Image.

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])) // [ [15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11] ]

console.log(rotate([[1]])) // [ [1] ]

console.log(rotate([[1, 2], [3, 4]])) // [ [3, 1], [4, 2] ]