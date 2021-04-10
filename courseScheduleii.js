/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
  // build graph
  const graph = {};
  const inbound = new Array(numCourses).fill(0);
  
  for (let i = 0; i < numCourses; i++) graph[i] = [];
  for (let [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inbound[course]++;
  }
  
  const order = [];
  const queue = [];

  // notice that we're iterating over the array of inbound edges
  // if a node has no dependencies (inbound edges), then we can add it to
  // our topological ordering and explore its neighbors
  for (let i = 0; i < inbound.length; i++) {
    if (!inbound[i]) queue.push(i);
  }
  
  while (queue.length) {
    const prereq = queue.shift();
    for (let nextCourse of graph[prereq]) {
      inbound[nextCourse]--;
      if (!inbound[nextCourse]) queue.push(nextCourse);
    }
    order.push(prereq);
  }
  
  return order.length === numCourses ? order : [];
};

