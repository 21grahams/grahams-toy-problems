/*
leetcode - Compare Strings by Frequency of the Smallest Character

Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically 
smallest character is 'c', which has a frequency of 2.

You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

Return an integer array answer, where each answer[i] is the answer to the ith query.

*/

// input: an array of string words and another array of query string queries
// output: an array of integers, where each current answer is the answer to the nth query
// constraints: 1 <= queries.length <= 2000. 1 <= words.length <= 2000. 1 <= queries[i].length, words[i].length <= 10. queries[i][j], words[i][j] consist of lowercase English letters.
// edge cases: if f(queries[i]) is NOT < f(W), return an empty array
const numSmallerByFrequency = (queries, words) => {
  // create a letterMap, assign each letter to it's number equivilant in the alphabet
  // create a lexicographicalQueryCount, assign to 0 
  // create a lexicographicalWordCount, assign to 0 
  // create a finalWordCount, assign to 0 
  // create a wordAmount, assign to 0 
  // create a finalCountArr
  // loop over queries, find the lexicographically smallest character in each query string, assign it's relative alphabet character number to lexicographicalQueryCount
    // loop over words, find the lexicographically smallest character in each word string, assign it's relative alphabet character number to lexicographicalWordCount
      // if lexicographicalWordCount is larger than lexicographicalQueryCount
        // increment finalWordCount
        // push finalWordCount onto finalCountArr
    // reset finalWordCount
  // return finalCountArr
};

console.log(numSmallerByFrequency(['cbd'], ['zaaaz'])) // [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").

console.log(numSmallerByFrequency(['bbb', 'cc'], ["a","aa","aaa","aaaa"])) // [1, 2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").