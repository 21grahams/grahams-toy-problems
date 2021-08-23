/* leetcode - Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false */

// input: an integer representing the courses you have to take and an array of integers, representing prerequisites, which indicate that you MUST take course b^i first, if you want to take course a^i
// output: boolean. True if you can finish all the courses given the prerequisites constraints. False if not
// constraints: 1 <= numCourses <= 10^5. 0 <= prerequisites.length <= 5000. prerequisites[i].length == 2. 0 <= ai, bi < numCourses. All the pairs prerequisites[i] are unique.
// edge cases: if there are no courses to take, return false
const canFinish = (numCourses, prerequisites) => {
  // create a new map and pass in prereqs
  const map = new Map(prerequisites);

  // for of loop over prereqs
  for (const [key, value] of prerequisites) {
    let pre = value;
    let arr = [key];
    // while pre exists or equals 0
    while (pre || pre === 0) {
      // if arr includes pre
      if (arr.includes(pre)) {
        // return false
        return false;
      }
      // push pre onto arr
      arr.push(pre);
      // assign the value of map.get to pre
      pre = map.get(pre);
    }
  }
  // return true
  return true;
};

console.log(canFinish(2, [[1, 0]])); // true
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
