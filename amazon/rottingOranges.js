/*

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

 var directions = [[1,0],[-1,0],[0,1],[0,-1]];

 var orangesRotting = function(grid) {
   // BFS
   let queue = []; // of rotten oranges
   let goodOranges = 0;

   for (let i = 0; i < grid.length; i++) {
     for (let j = 0; j < grid[0].length; j++) {
       if (grid[i][j] === 2) queue.push([i, j]);
       else if (grid[i][j] === 1) goodOranges++;
     }
   }
 
   let days = 0;
   if (!goodOranges) return days;
 
   while (queue.length && goodOranges) {
     let size = queue.length;
     for (let i = 0; i < size; i++) {
       var rotten = queue.shift();
       for (let [r, c] of directions) {
         let row = rotten[0] + r;
         let col = rotten[1] + c;
         if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === 1) {
           grid[row][col] = 2;
           goodOranges--;
           queue.push([row, col]);
         }
       }
     }
     days++;
   }
 
   return goodOranges ? -1 : days;
 };
 

