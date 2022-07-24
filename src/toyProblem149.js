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
  let finalResult = []
  // loop over the matrix
  for (let i = 0; i < matrix[0].length; i++) {
    // create a cols array
    let cols = []
    // loop over all the columns of the matrix
    for (let j = 0; j < matrix.length; j++) {
      // push all elements of the current index of matrix to the cols array
      cols.push(matrix[j][i])
    }
    // push all elements of the cols array to the finalResult array
    finalResult.push(cols)
  }
  // return finalResult array
  return finalResult
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