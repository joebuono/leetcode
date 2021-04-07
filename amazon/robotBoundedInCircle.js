/*

On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

*/

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
  // north, east, south, west (north facing 'right' initally, but it shouldn't really matter)
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];
  let facing = 0;
  let row = 0;
  let col = 0;
  
  // notice that we don't have to run the instructions four times
  // if the robot isn't facing north, then it must be a circle
  // there's apparently a math proof for this one
  for (let char of instructions) {
    if (char === 'G') {
      row += directions[facing][0];
      col += directions[facing][1];
    } else if (char === 'L') {
      facing = (facing + 1) % 4;
    } else {
      facing = (facing + 3) % 4;
    }
  }
  
  return (row === 0 && col === 0) || facing !== 0;
};

