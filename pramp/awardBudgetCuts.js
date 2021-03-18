/*

Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
Constraints:

[time limit] 5000ms

[input] array.double grantsArray

0 ≤ grantsArray.length ≤ 20
0 ≤ grantsArray[i]
[input] double newBudget

[output] double

*/

function findGrantsCap(grantsArray, newBudget) {
  // sort in descending order
  grantsArray.sort((a, b) => b - a);

  // pad the array with a zero at the end to
  // cover the case where 0 <= cap <= grantsArray[i]
  grantsArray.push(0);

  // calculate the total amount we need to
  // cut back to meet the reduced budget
  let surplus = grantsArray.reduce((acc, curr) => acc + curr) - newBudget;

  // if there is nothing to cut, simply return the highest grant as the cap
  if (surplus <= 0) return grantsArray;

  // clever!
  // i is used to represent the increasing number of grant budgets affected at each cut
  for (var i = 0; i < grantsArray.length - 1; i++) {
    surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1]);
    if (surplus <= 0) break;
  }

  // so clever!
  return grantsArray[i + 1] + (-surplus / (i + 1));
}

debugger;
console.log(findGrantsCap([2, 100, 50, 120, 1000], 190));