/*

There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1). The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the m x n maze, the ball's start position and the destination, where start = [startrow, startcol] and destination = [destinationrow, destinationcol], return true if the ball can stop at the destination, otherwise return false.

You may assume that the borders of the maze are all walls (see examples).

*/



/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */


// up, down, left, right
var directions = [[-1,0],[1,0],[0,-1],[0,1]];


// BFS (iterative)
var hasPath = function(maze, start, destination) {
  const visited = new Array(maze.length).fill(0).map(() => new Array(maze[0].length).fill(false));
  visited[start[0]][start[1]] = true;
  debugger;
  const queue = [[start[0], start[1]]];

  while (queue.length) {
    const s = queue.shift();
    if (s[0] === destination[0] && s[1] === destination[1]) return true;

    for (let [x, y] of directions) {
      let r = s[0] + x;
      let c = s[1] + y;
      while (canRoll(maze, r, c)) {
        r += x;
        c += y;
      }

      r -= x;
      c -= y;

      if (!visited[r][c]) {
        queue.push([r, c]);
        visited[r][c] = true;
      }
    }
  }

  return false;
};

var canRoll = function(maze, row, col) {
  return row >= 0 && 
         row < maze.length && 
         col >= 0 && 
         col < maze[0].length &&
         maze[row][col] === 0;
};


// returns true
// let maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
// let start = [0,4];
// let destination = [4,4];

// returns false
let maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
let start = [0,4];
let destination = [4,4];


debugger;
console.log(hasPath(maze, start, destination));
