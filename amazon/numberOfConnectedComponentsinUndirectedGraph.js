/*

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */


// Union-Find Solution
var countComponents = function(n, edges) {
  const roots = new Array(n);
  for (let i = 0; i < n; i++) roots[i] = i;

  for (let [a, b] of edges) {
    let root1 = find(a, roots);
    let root2 = find(b, roots);
    if (root1 !== root2) {
      roots[root1] = root2;
      n--;
    }
  }

  return n;
};

var find = function(i, roots) {
  while (i !== roots[i]) {
    roots[i] = roots[roots[i]]; // path compression
    i = roots[i];
  }
  return i;
};


// DFS solution
var countComponents = function(n, edges) {

  // build graph as adjacency list
  const graph = {};
  for (let [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    graph[a].push(b);
    
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  }

  const visited = new Set();
  
  const dfs = (node) => {
    visited.add(node);
    
    if (graph[node]) {
      for (let child of graph[node]) {
        if (!visited.has(child)) {
          dfs(child);
        }
      }     
    }
  };

  let numberOfComponents = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      numberOfComponents++;
      dfs(i);
    }
  }

  return numberOfComponents;
};
