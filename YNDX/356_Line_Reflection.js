"use strict";

function a(arr) {
  const set = new Set();

  let min = Infinity;
  let max = -Infinity;

  for (let point of arr) {
    set.add(point.join(", "));

    let [x, y] = point;
    max = Math.max(max, x);
    min = Math.min(min, x);
  }

  let result = true;

  for (let point of arr) {
    let [x, y] = point;

    if (!set.has([max - x + min, y].join(", "))) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(
  a([
    [1, 1],
    [-1, 1],
  ])
); // true
console.log(
  a([
    [1, 1],
    [-1, -1],
  ])
); // false
