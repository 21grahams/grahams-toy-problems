/* leetcode - Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false */

// input: an integer representing the courses you have to take and an array of integers, representing prerequisites, which indicate that you MUST take course b^i first, if you want to take course a^i
// output: boolean. True if you can finish all the courses given the prerequisites constraints. False if not
// constraints: 1 <= numCourses <= 10^5. 0 <= prerequisites.length <= 5000. prerequisites[i].length == 2. 0 <= ai, bi < numCourses. All the pairs prerequisites[i] are unique.
// edge cases: if there are no courses to take, return false
const canFinish = (numCourses, prerequisites) => {
  //========================================
  //      UNSOLVED ANSWER USING MAP
  //========================================
  // const map = new Map(prerequisites);

  // for (const [key, value] of prerequisites) {
  //   let pre = value;
  //   let arr = [key];
  //   while (pre || pre === 0) {
  //     if (arr.includes(pre)) {
  //       return false;
  //     }
  //     arr.push(pre);
  //     pre = map.get(pre);
  //   }
  // }
  // return true;

  //========================================
  //      SOLVED ANSWER USING QUEUES
  //========================================

  const indegree = new Array(numCourses).fill(0);
  const queue = [];
  /*
   The goal is to find whether the course graph has cycles.

   We are looking for the number of indgree for each course and
   put the course with no indegree into the queue. As we go
   through the courses in queue, we break off the dependency(edge)
   from the current course in queue in all the prerequisite
   pairs. Then we put all the courses with zero indegree into
   the queue. Repeat until the queue is empty. We maintain a
   count and increment it each time we pop the queue. The count
   will equal to the number of courses when there's no cycle and it
   is possible to take all the courses.

   directed graph denotes: [prereq] --> [course]
   */
  for (const [course, prereq] of prerequisites) {
    indegree[course] += 1;
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;

  while (queue.length !== 0) {
    const c = queue.pop();
    count += 1;

    for (const [course, prereq] of prerequisites) {
      if (prereq === c) {
        indegree[course] -= 1;
        if (indegree[course] === 0) {
          queue.push(course);
        }
      }
    }
  }
  return count === numCourses;
};

// Runtime: 128 ms, faster than 26.11% of JavaScript online submissions for Course Schedule.
// Memory Usage: 43.9 MB, less than 56.72% of JavaScript online submissions for Course Schedule.

console.log(canFinish(2, [[1, 0]])); // true
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

console.log(canFinish(2, [[1, 0],[0, 1]])); // false
  // Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

console.log(canFinish(13, [[1,2],[2,3],[2,10],[3,4],[4,5],[4,11],[5,1]])); // false