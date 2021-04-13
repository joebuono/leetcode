/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const graph = {};
  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  for (let from in graph) {
    graph[from].sort(); // reverse alphabetically
  }

  return dfs('JFK', ['JFK'], graph, new Set(['JFK']), tickets.length + 1);


  // const itinerary = [];
  // const stack = ['JFK'];
  // const visited = new Set();

  // while (stack.length) {
  //   const node = stack.pop();
  //   itinerary.push(node);
  //   if (itinerary.length === tickets.length + 1) {
  //     return itinerary;
  //   }

  //   const neighbors = graph[node];
  //   for (let i = neighbors.length - 1; i >= 0; i--) {
  //     if (!visited.has(neighbors[i])) {
  //       stack.push(neighbors[i]);
  //       visited.add(neighbors[i]);
  //     }
  //   }

  //   itinerary.pop();
  // }
};

const dfs = function(current, itinerary, graph, visited, target) {
  if (itinerary.length === target) return itinerary;

  if (graph[current]) {
    for (let destination of graph[current]) {
      if (!visited.has(destination)) {
        visited.add(destination);
        let result = dfs(destination, [...itinerary, destination], graph, visited, target);
        if (result) return result;
        visited.delete(destination);
      }
    }
  }

  return null;
};

// build a graph
// sort each array of neighbors alphabetically
// dfs starting from JFK

/*

JFK: [ATL, SFO],
SFO: [ATL],
ATL: [JFK, SFO]


Starting from JFK, can we reach all the other nodes?


JFK ----> SFO
|^        /^
|     /
v  /v
ATL

*/

