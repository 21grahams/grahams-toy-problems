/* leetcode - Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. */

// input: an M x N grid of characters (in a matrix format) and a string of letters - word
// output: a boolean - true if the word exists in the grid, false if it doesn't
// constraints: m == board.length. n = board[i].length. 1 <= m, n <= 6. 1 <= word.length <= 15. board and word consists of only lowercase and uppercase English letters.
// edge cases: if board is empty, return false
const exist = (board, word) => {
  // loop over rows of board
    // loop over cols of board
      // if current board square equals first letter of word AND we have found a DFS path of our word
        // return true

  // if we haven't found our path, it doesn't exist, return false

  // create the DFS helper function, takes in the board, i, j, word and set count to -
    // if count equals the length of the word, return true (edge case)
    // ensure we don't go outside the boundaries of our grid. If so, return false
    // create a temp var, assign to current square of board
    // assign current square of board to empty string
    // create a found var, assign to every possible DFS search
    // assign current square of board to temp
    // return found
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')) // false