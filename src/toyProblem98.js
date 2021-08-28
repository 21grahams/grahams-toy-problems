/* leetcode - Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation */

// input: a 2d n x n matrix of integers
// output: the same matrix rotated 90 degrees clockwise
// constraints: matrix.length == n. matrix[i].length == n. 1 <= n <= 20. -1000 <= matrix[i][j] <= 1000
// edge cases: if matrix contains just one integer (this a 1x1 matrix), return the matrix with just that number
const rotate = matrix => {
  // account for edge case

  // create a var for row, assign to matrix length
  // create a var for col, assign to matrix at index 0 length

  // while row is less than length of matrix
    // loop over matrix
      // loop over cols decrementing
        // set each row to equal the current cols
        // increment row
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])) // [ [15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11] ]

console.log(rotate([[1]])) // [ [1] ]

console.log(rotate([[1, 2], [3, 4]])) // [ [3, 1], [4, 2] ]