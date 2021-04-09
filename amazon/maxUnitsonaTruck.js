/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  // sort by units
  boxTypes.sort((a, b) => b[1] - a[1]);
  
  let max = 0;
  
  for (let i = 0; i < boxTypes.length && truckSize; i++) {
    const boxCount = Math.min(truckSize, boxTypes[i][0]);
    max += boxCount * boxTypes[i][1];
    truckSize -= boxCount;
  }
  
  return max;
};
