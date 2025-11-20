"use strict";

const TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const current = this.cache.get(key);
  if (current) {
    clearTimeout(current.timer);
  }

  this.cache.set(key, {
    value,
    timer: setTimeout(() => {
      this.cache.delete(key);
    }, duration),
  });

  return !!current;
};

TimeLimitedCache.prototype.get = function (key) {
  const current = this.cache.get(key);
  return current ? current.value : -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

const t = new TimeLimitedCache();

setTimeout(() => {
  console.log(t.cache);
}, 0); // null

setTimeout(() => {
  console.log(t.set(1, 42, 100));
}, 0); // false

setTimeout(() => {
  console.log(t.get(1));
}, 50); // 42

setTimeout(() => {
  console.log(t.count());
}, 50); // 1

setTimeout(() => {
  console.log(t.get(1));
}, 150); // -1

const s = new TimeLimitedCache();
setTimeout(() => {
  console.log("\n", s.cache);

  setTimeout(() => {
    console.log(t.set(1, 42, 50));
  }, 0); // false

  setTimeout(() => {
    console.log(t.set(1, 50, 100));
  }, 40); // true

  setTimeout(() => {
    console.log(t.get(1));
  }, 50); // 50

  setTimeout(() => {
    console.log(t.get(1));
  }, 120); // 50

  setTimeout(() => {
    console.log(t.get(1));
  }, 200); // -1

  setTimeout(() => {
    console.log(t.count());
  }, 250); // 0
}, 2000);
