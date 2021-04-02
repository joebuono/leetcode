/*

LRU Cache

*/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// DLL
class DLL {
  constructor(capacity) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.capacity = capacity;
  }

  // insert
  // return node
  insert(val) {
    const node = new Node(val);
    // if no head
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
    if (this.size > this.capacity) {
      // pop off lru
    }
  }

  // remove
  // return node
  remove(node) {
    // what if it's the head or tail?
    let before = node.prev;
    let after = node.next;
    before.next = after;
    after.prev = before;
  }
}


// DLL Node
class Node {
  constructor(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

