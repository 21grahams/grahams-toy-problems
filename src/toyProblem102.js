/* leetcode - Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. */

// input: an M x N grid of characters (in a matrix format) and a string of letters - word
// output: a boolean - true if the word exists in the grid, false if it doesn't
// constraints: m == board.length. n = board[i].length. 1 <= m, n <= 6. 1 <= word.length <= 15. board and word consists of only lowercase and uppercase English letters.
// edge cases: if board is empty, return false
const exist = (board, word) => {
  // create a rows, assign to length of matrix
  // create a cols, assign to length of matrix at 0 index
  // split the input word into a series of letters

  // traverse board, loop over rows
    // loop over cols
      // loop over splitter
        // while current letter in splitter exists on board
          // increment splitter current element
          // if next letter in splitter equals next vertical element in board (i 1 j 0)
            // increment rows
          // else if next letter in splitter equals next horizontal element in board (i 0 j 1)
            // increment cols
          // if we have reached end of splitter
            // return true

  // return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')) // false