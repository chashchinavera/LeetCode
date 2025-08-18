"use strict";

var filter = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
); // [20,30]
console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
); // [1]
console.log(
  filter([-2, -1, 0, 1, 2], function plusOne(n) {
    return n + 1;
  })
); // [-2,0,1,2]
