/* leetcode - Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false */

const canFinish = (numCourses, prerequisites) => {
  // do something
};

console.log(canFinish(2, [[1, 0]])) // true
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

console.log(canFinish(2, [[1, 0], [0, 1]])) // false
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.