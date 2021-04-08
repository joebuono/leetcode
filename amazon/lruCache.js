/*

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?

*/


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.list = new DoublyLinkedList(capacity);
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache.get(key);
  if (node === undefined) return -1;

  this.list.moveToHead(node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.cache.get(key);

  if (node === undefined) {
    // create new node
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.list.addToHead(newNode);
    // if capacity exceeded, remove lru
    if (this.cache.size > this.capacity) {
      const tail = this.list.popTail();
      this.cache.delete(tail.key);
    }
  } else {
    // update node
    node.val = value;
    // moveToHead
    this.list.moveToHead(node);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


class DoublyLinkedList {
  constructor(capacity) {
    this.head = new Node();
    this.tail = new Node();
    // pseudo head and tail (for cleaner code and to avoid checking null)
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node) {
    // head <-> node <-> next
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  remove(node) {
    // before <-> after
    const before = node.prev;
    const after = node.next;
    before.next = after;
    after.prev = before;
  }

  moveToHead(node) {
    this.remove(node);
    this.addToHead(node);
  }

  popTail() {
    const tail = this.tail.prev;
    this.remove(tail);
    return tail;
  }
}

var Node = function(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

