"use strict";

function memoize(fn) {
  const memoMap = new Map();
  return function (...args) {
    let memoizedValue = memoMap.get(`${args[0]} ${args[1]}`);

    if (memoizedValue !== undefined) {
      return memoizedValue;
    }

    memoizedValue = fn(...args);
    memoMap.set(`${args[0]} ${args[1]}`, memoizedValue);
    return memoizedValue;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
