/*
leetcode - transpose matrix

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
*/

// input: a 2D integer array matrix
// output: the same or different matrix returned in a transposed manor, where the matrix is flipped over the main diagonal, switching it's rows and column indicies
// constraints: m == matrix.length. n == matrix[i].length. 1 <= m, n <= 1000. 1 <= m * n <= 105. -109 <= matrix[i][j] <= 109. 
// edge cases: none at this time
const transpose = matrix => {
  // create a finalResult array
  // loop over the matrix
    // create a cols array
    // loop over all the columns of the matrix
      // push all elements of the current index of matrix to the cols array
  // push all elements of the cols array to the finalResult array
  
  // return finalResult array
}

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
/*
[[1, 2, 3], -> [[1, 4, 7],
[4, 5, 6], ->  [2, 5, 8],
[7, 8, 9]] ->  [3, 6, 9]]
*/

console.log(transpose([[1, 2, 3], [4, 5, 6]])) // [[1, 4], [2, 5], [3, 6]]
/*
[1, 2, 3] -> [[1, 4],
[4, 5, 6] -> [2, 5],
          -> [3, 6]]
*/