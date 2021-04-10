/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.list = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val] !== undefined) return false
  this.map[val] = this.list.push(val) - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  let idx = this.map[val];
  if (idx === undefined) return false;

  // swap with last item
  let temp = this.list[idx];
  let last = this.list[this.list.length - 1];
  this.list[idx] = last;
  this.list[this.list.length - 1] = temp;
  
  // update index of the item which was swapped from the end
  this.map[last] = idx;
  
  // remove item from map and list
  delete this.map[temp];
  this.list.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.list[Math.floor(Math.random() * this.list.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */