"use strict";

var once = function (fn) {
  let isDone = false;
  return function (...args) {
    if (isDone) return;
    isDone = true;
    return fn(...args);
  };
};

const fn1 = (a, b, c) => a + b + c;
const oncefn1 = once(fn1);

console.log(oncefn1(1, 2, 3)); // 6
console.log(oncefn1(2, 3, 6)); // undefined

const fn2 = (a, b, c) => a * b * c;
const oncefn2 = once(fn2);

console.log(oncefn2(5, 7, 4)); // 140
console.log(oncefn2(2, 3, 6)); // undefined
console.log(oncefn2(4, 6, 8)); // undefined
