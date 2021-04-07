/*

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

*/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// DFS
var findCircleNum = function(isConnected) {
  let n = isConnected.length;

  const visited = new Array(n).fill(0);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      dfs(isConnected, visited, i);
      count++;
    }
  }

  return count;
};

var dfs = function(M, visited, i) {
  visited[i] = 1;

  for (let j = 0; j < M.length; j++) {
    if (M[i][j] === 1 && visited[j] === 0) {
      dfs(M, visited, j);
    }
  }
};


// Basically, it's an adjacency matrix
// Attempt at Union-Find
var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  const roots = new Array(n);
  for (let i = 0; i < n; i++) roots[i] = i;

  for (let i = 0; i < n; i++) {
    let root1 = find(i, roots);
    for (let j = 0; j < n; j++) {
      let root2 = find(j, roots);
      if (isConnected[i][j] && root1 !== root2) {
        roots[root1] = root2;
        n--;
      }
    }
  }

  return n;
};

var find = function(id, roots) {
  while (roots[id] !== id) {
    roots[id] = roots[roots[id]]; // path compression
    id = roots[id];
  }
  return id;
}