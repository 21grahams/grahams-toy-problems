/* leetcode - Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false */

// input: an integer representing the courses you have to take and an array of integers, representing prerequisites, which indicate that you MUST take course b^i first, if you want to take course a^i
// output: boolean. True if you can finish all the courses given the prerequisites constraints. False if not
// constraints: 1 <= numCourses <= 10^5. 0 <= prerequisites.length <= 5000. prerequisites[i].length == 2. 0 <= ai, bi < numCourses. All the pairs prerequisites[i] are unique.
// edge cases: if there are no courses to take, return false

let visiting; // is being explored
let visited; // is already explored
let graph;

var canFinish = function (numCourses, prerequisites) {
  graph = new Map();
  visiting = new Set();
  visited = new Set();

  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  for (const [v, e] of graph) {
    if (DFS(v)) {
      return false; //if cyclic it will not finish so it is false
    }
  }

  return true;
};

var DFS = function (v) {
  visiting.add(v);
  let edges = graph.get(v); // get all the edges to explore

  if (edges) {
    //console.log(edges)
    for (let e of edges) {
      if (visited.has(e)) {
        //skip if it is explored already
        continue;
      }

      if (visiting.has(e)) {
        //found e is being explored
        return true;
      }

      if (DFS(e)) {
        // DFS deeper if this e is cyclic
        return true;
      }
    }
  }

  visiting.delete(v); // remove from visiting set when all decedant v are visited
  visited.add(v);
  return false;
};

// Runtime: 84 ms, faster than 90.05% of JavaScript online submissions for Course Schedule.
// Memory Usage: 43.9 MB, less than 56.72% of JavaScript online submissions for Course Schedule.

console.log(canFinish(2, [[1, 0]])); // true
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

console.log(canFinish(2, [[1, 0], [0, 1]])); // false
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

console.log(canFinish(13, [[1, 2], [2, 3], [2, 10], [3, 4], [4, 5], [4, 11], [5, 1]])); // false