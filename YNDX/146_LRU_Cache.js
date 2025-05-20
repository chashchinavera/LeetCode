"use strict";

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const curValue = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, curValue);
    return curValue;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

const a = new LRUCache(3);

a.put(1, 1);
a.put(2, 2);
a.put(3, 3);
a.put(4, 4);
a.put(1, 3);
a.get(3);

console.log(a);
