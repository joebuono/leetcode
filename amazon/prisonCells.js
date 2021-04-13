/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
  const cache = new Map();
  let isFastForwarded = false;

  // simulate game
  while (n > 0) {
    if (!isFastForwarded) {
      // check if we can fast forward
      if (cache.has(cells)) {
        n = n % cache.get(cells) - n;
        isFastForwarded = true;
      } else {
        cache.set(cells, n);
      }
    }

    if (N > 0) {
      n--;
      updateCells(cells);
    }

  }

  return cells;
};

var updateCells = function(cells) {
  cells[0] = 0;
  cells[cells.length - 1] = 0;
  for (let i = 1; i < cells.length - 1; i++) {
    if (cells[i - 1] === cells[i + 1]) {
      cells[i] = 1;
    } else {
      cells[i] = 0;
    }
  }
};
