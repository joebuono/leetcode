/*

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */


// More elegant solution
// Essentially, the difference is that this solution
// marks visited islands as '0' in the grid
// We also check all the boundaries in one line
var numIslands = function(grid) {
  if (!grid || !grid.length) return 0;

  let total = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        total++;
        dfs(row, col);
      }
    }
  }

  return total;

  function dfs(row, col) {
    // check if out of bounds
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
      return;
    }
    
    // mark island as a zero so you don't recurse over it again
    grid[row][col] = '0';

    dfs(row + 1, col); // down
    dfs(row - 1, col); // up
    dfs(row, col + 1); // right
    dfs(row, col - 1); // left
  }
};


// First solution, 2/11/21
var numIslands = function(grid) {
  // edge cases

  let total = 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let visited = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1' && !visited.has(`${row},${col}`)) {
        visited.add(`${row},${col}`);
        total++;
        dfs(row, col);
      }
    }
  }

  return total;

  function dfs(row, col) {
    const up = `${row - 1},${col}`;
    const right = `${row},${col + 1}`;
    const down = `${row + 1},${col}`;
    const left = `${row},${col - 1}`;

    // up
    if (row > 0 && grid[row - 1][col] === '1' && !visited.has(up)) {
      visited.add(up);
      dfs(row - 1, col);
    }
    // right
    if (col < cols - 1 && grid[row][col + 1] === '1' && !visited.has(right)) {
      visited.add(right);
      dfs(row, col + 1);
    }
    // down
    if (row < rows - 1 && grid[row + 1][col] === '1' && !visited.has(down)) {
      visited.add(down);
      dfs(row + 1, col);
    }

    // left
    if (col > 0 && grid[row][col - 1] === '1' && !visited.has(left)) {
      visited.add(left);
      dfs(row, col - 1);
    }
  }
};

