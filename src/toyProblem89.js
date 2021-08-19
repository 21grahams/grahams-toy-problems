/* leetcode - Find Center of Star Graph

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph */

// input: a series of n edges on an undirected star graph labeled from 1 to n
// output: an integer which corresponds to the center of the given star graph
// constraints: 3 <= n <= 10^5. edges.length == n - 1. edges[i].length == 2. 1 <= ui, vi <= n. ui != vi. The given edges represent a valid star graph.
// edge cases: none at this time
const findCenter = (edges) => {
  // create a result var, assign to 0
  let result = 0;
  // create a resultObj
  let resultObj = {};
  // create a largest var, assign to 0
  let largest = 0;

  // loop over the input edges twice
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < edges[i].length; j++) {
      // look at each edge. If value hasn't been seen before
      if (resultObj[edges[i][j]] === undefined) {
        // assign to 1
        resultObj[edges[i][j]] = 1;
        // otherwise
      } else {
        // increment
        resultObj[edges[i][j]]++;
      }
    }
  }
  // find the largest value in the resultObj by looping
    // store that value's key in the result
  for (let key in resultObj) {
    if (resultObj[key] > largest) {
      largest = resultObj[key];
      result = key;
    }
  }
  // return result
  return result;
};

// Runtime: 184 ms, faster than 24.25% of JavaScript online submissions for Find Center of Star Graph.
// Memory Usage: 63.3 MB, less than 20.04% of JavaScript online submissions for Find Center of Star Graph.

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
); // 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
); // 1
