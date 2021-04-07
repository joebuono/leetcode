/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // build graph
  const graph = {};

  // build inbound edges array
  const inbound = new Array(numCourses).fill(0);

  for (let [course, prereq] of prerequisites) {
    if (!graph[prereq]) {
      graph[prereq] = [];
    }
    graph[prereq].push(course);
    inbound[course]++;
  }

  // declare queue
  const queue = [];

  // a topological ordering of the classes
  const order = [];

  // push courses with zero prereqs to the queue
  for (let i = 0; i < inbound.length; i++) {
    if (inbound[i] === 0) {
      queue.push(i);
    }
  }

  // while queue.length
  while (queue.length) {
    let curr = queue.shift();
    if (graph[curr]) {
      for (let neighbor of graph[curr]) {
        inbound[neighbor]--;
        if (inbound[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
    order.push(curr);
  }

  return order.length === numCourses;
};
