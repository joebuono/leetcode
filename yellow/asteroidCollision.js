/*

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
Example 4:

Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

// Refactored stack solution
var asteroidCollision = function(asteroids) {
  let stack = [];
  let i = 0;
  while (i < asteroids.length) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      let topOfStack = stack[stack.length - 1];
      while (stack.length && topOfStack > 0 && Math.abs(asteroids[i]) > topOfStack) {
        stack.pop();
        topOfStack = stack[stack.length - 1];
      }

      if (Math.abs(asteroids[i]) === topOfStack) {
        stack.pop();
      } else if (!stack.length || topOfStack < 0) {
        stack.push(asteroids[i]);
      }
    }
    i++
  }

  return stack;
};

// Stack solution
// Time: O(n), where n is the number of asteroids. Our stack pushes and pops each asteroid at most once.
// Space: O(n), worst case
var asteroidCollision = function(asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (stack.length === 0 || asteroids[i] > 0) {
      stack.push(asteroids[i]);
      break;
    }
    while (true) {
      let topOfStack = stack[stack.length - 1];
      if (topOfStack < 0) {
        stack.push(asteroids[i]);
        break;
      }

      let comparison = Math.abs(asteroids[i]) - Math.abs(stack[stack.length - 1]);

      if (comparison >= 0) {
        stack.pop();
      } else {
        break;
      }
    }
  }

  return stack;
};






var asteroidCollision = function(asteroids) {

  // for each int in asteroids
  for (let i = 0; i < asteroids.length; i++) {
    // if int is negative
    if (asteroids[i] < 0) {
      // loop backwards (to the left) from negative int
      let j = i - 1;
      while (j >= 0) {
        // what if j is already null?
        if (asteroids[j] === null || asteroids[j] < 0) {
          j--;
        } else {
          let comparison = Math.abs(asteroids[i]) - Math.abs(asteroids[j]);
          if (comparison > 0) {
            asteroids[j] = null;
            j++;
          } else if (comparison === 0) {
            asteroids[j] =  null;
            asteroids[i] = null; 
            break;
          } else {
            asteroids[i] = null; 
            break;
          }
        }
      }
    }
  }

  let result = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] !== null) {
      result.push(asteroids[i]);
    }
  }

  return result;

    // if Math.abs(negativeInt) > Math.abs(positiveInt)
      // set positiveInt index to null and keep iterating
    // else if Math.abs(negativeInt) === Math.abs(positiveInt)
      // set both pos and neg int indices to null and stop iterating
    // else 
      // set negative int index to null and stop iterating

  // declare result array
  // iterate through asteroids, pushing non-null values to result array
  
  // return result array
};

