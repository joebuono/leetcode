function calcDroneMinEnergy(route) {
  const startingEnergy = route[0][2];
  
  // get highest point
  let highest = 0;
  for (let i = 1; i < route.length; i++) {
    highest = Math.max(highest, route[i][2]);
  }
  
  if (startingEnergy >= highest) return 0;
  
  return highest - startingEnergy;
}
