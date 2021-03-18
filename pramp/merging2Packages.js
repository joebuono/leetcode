/*

A simple variation on twoSum

*/

function getIndicesOfItemWeights(arr, limit) {
  const compliments = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (compliments[arr[i]] !== undefined) {
      return [i, compliments[arr[i]]];
    }
    compliments[limit - arr[i]] = i;
  }
  
  return [];
}
