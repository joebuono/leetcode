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

var hasPath = function(maze, start, destination) {
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);
  var found = false;

  var recurse = function(row, col) {
    for (let [x, y] of directions) {
      let r = row + x;
      let c = col + y;
      if (!canRoll(maze, r, c)) continue;
      console.log(maze[row][col], r, c);
      
      console.log('row 3 col 4', maze[3][4]);
      while (canRoll(maze, r + x, c + y)) {
        r += x;
        c += y;
        console.log('grid', maze[row][col], 'row', r, 'col', c);
      }

      let cell = `${r},${c}`;
      if (cell === `${destination[0]},${destination[1]}`) {
        found = true;
      }
      if (!visited.has(cell)) {
        visited.add(cell);
        recurse(r, c);
      }
    }
  };

  recurse(start[0], start[1]);

  return found;
};

var canRoll = function(maze, row, col) {
  return row >= 0 && 
         row < maze.length && 
         col >= 0 && 
         col < maze[0].length
         maze[row][col] === 0;
};


let maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
let start = [0,4];
let destination = [4,4];

debugger;
console.log(hasPath(maze, start, destination));

