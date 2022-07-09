/*
leetcode - Compare Strings by Frequency of the Smallest Character

Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

Return an integer array answer, where each answer[i] is the answer to the ith query.

*/

const numSmallerByFrequency = (queries, words) => {
  // do something  
};

console.log(numSmallerByFrequency(['cbd'], ['zaaz'])) // [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").

console.log(numSmallerByFrequency(['bbb', 'cc'], ["a","aa","aaa","aaaa"])) // [1, 2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").