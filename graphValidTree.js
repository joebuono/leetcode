/*

You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

*/


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */


/*
Basic definition:
1. Fully connected
2. No cycles

Better definition:
1. For the graph to be a valid tree, it must have exactly n - 1 edges. 

- Any less, and it can't possibly be fully connected. Any more, and it has to contain cycles. Additionally, if the graph is fully connected and contains exactly n - 1 edges, it can't possibly contain a cycle, and therefore must be a tree!

*/


// fully connected and n - 1 edges
var validTree = function(n, edges) {
  // ******** THIS IS THE LINE *********
  if (edges.length !== n - 1) return false;
  
  // Then we just check if it's fully connected

  // build graph from edges
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // iterative dfs
  const visited = new Set();
  visited.add(0);
  const stack = [0]; 

  while (stack.length) {
    const node = stack.pop();
    for (let neighbor of graph[node]) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      stack.push(neighbor);
    }
  }

  return visited.size === n;
};



// fully connected and no cycles
var validTree = function(n, edges) {

  // build graph from edges
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  visited.add(0);
  // 
  const stack = [[0, -1]];
  
  // DFS iterative
  while (stack.length) {
    const [node, parent] = stack.pop();
    
    for (let neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (visited.has(neighbor)) {
          return false;
        }
        
        visited.add(neighbor);
        stack.push([neighbor, node]);
      }
    }
  }
  
//   let noCycle = true;
//   const dfs = function(node, parent) {
//     for (let child of graph[node]) {
//       if (child !== parent) {
//         if (visited.has(child)) {
//           noCycle = false;
//         } else {
//           visited.add(child);
//           dfs(child, node);
//         }
//       }
//     }
//   };

//   dfs(0, -1);

  return visited.size === n;
};