/* leetcode - Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. */

// input: an M x N grid of characters (in a matrix format) and a string of letters - word
// output: a boolean - true if the word exists in the grid, false if it doesn't
// constraints: m == board.length. n = board[i].length. 1 <= m, n <= 6. 1 <= word.length <= 15. board and word consists of only lowercase and uppercase English letters.
// edge cases: if board is empty, return false
const exist = (board, word) => {
  // do something
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')) // false