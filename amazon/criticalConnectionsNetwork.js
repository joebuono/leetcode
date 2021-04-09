/*

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  // make a graph
  const graph = {};
  // also make a set of connections to remove from in O(1) time
  const edges = new Set();

  for (let i = 0; i < n; i++) graph[i] = [];

  for (let connection of connections) {
    graph[connection[0]].push(connection[1]);
    graph[connection[1]].push(connection[0]);
    edges.add(`[${Math.min(connection[0], connection[1])},${Math.max(connection[0], connection[1])}]`);
  }

  // keep track of rank (the order in which you've visited nodes)
  const rank = new Array(n).fill(-2);
  
  const dfs = function(node, depth) {
    // check if we've already visited the node
    if (rank[node] >= 0) return rank[node];

    // apparently we only care about the depth of each node in the current call stack?
    rank[node] = depth;

    // Setting it to n is arbitrary; it could be Infinity
    let min_back_depth = n;

    for (let neighbor of graph[node]) {
      // Don't immediately go back to the parent (false cycle)
      // That's why we filled the rank array with -2 instead of -1 (for the case of depth 0)
      if (rank[neighbor] === depth - 1) continue;

      // Recurse, get the min_back_depth of this neighbor
      const back_depth = dfs(neighbor, depth + 1);

      // If the depth we get back is less than the current depth, 
      // then the current node <-> neighbor edge must be in a cycle
      if (back_depth <= depth) {
        // console.log(node, neighbor);
        // discard edge from set
        edges.delete(`[${Math.min(node, neighbor)},${Math.max(node, neighbor)}]`);
      }

      min_back_depth = Math.min(min_back_depth, back_depth);
    }

    return min_back_depth;
  };

  dfs(0, 0);

  // return the remaining connections in the set
  return Array.from(edges).map(JSON.parse);
};