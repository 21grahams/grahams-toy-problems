/* leetcode - Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. */

// input: an M x N grid of characters (in a matrix format) and a string of letters - word
// output: a boolean - true if the word exists in the grid, false if it doesn't
// constraints: m == board.length. n = board[i].length. 1 <= m, n <= 6. 1 <= word.length <= 15. board and word consists of only lowercase and uppercase English letters.
// edge cases: if board is empty, return false
const exist = (board, word) => {
  // create the DFS helper function, takes in the board, i, j, word and set count to 0
  let dfs = (board, i, j, word, count = 0) => {
    // if count equals the length of the word, return true (edge case)
    if (count === word.length) return true;
    // ensure we don't go outside the boundaries of our grid. If so, return false
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[count]) return false;
    // create a temp var, assign to current square of board
    let temp = board[i][j];
    // assign current square of board to empty string
    board[i][j] = '';
    // create a found var, assign to every possible DFS search
    let found = dfs(board, i - 1, j, word, count + 1) || dfs(board, i + 1, j, word, count + 1) || dfs(board, i, j - 1, word, count + 1) || dfs(board, i, j + 1, word, count + 1);
    // assign current square of board to temp
    board[i][j] = temp;
    // return found
    return found;
  }

  // loop over rows of board
  for (let i = 0; i < board.length; i++) {
    // loop over cols of board
    for (let j = 0; j < board[0].length; j++) {
      // if current board square equals first letter of word AND we have found a DFS path of our word
      // return true
      if (board[i][j] === word[0] && dfs(board, i, j, word)) return true;
    }
  }
  // if we haven't found our path, it doesn't exist, return false
  return false;
};

// Runtime: 795 ms, faster than 24.15% of JavaScript online submissions for Word Search.
// Memory Usage: 39 MB, less than 90.17% of JavaScript online submissions for Word Search

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')) // false