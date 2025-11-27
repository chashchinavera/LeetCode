"use strict";

var fibGenerator = function* () {
  let current = 1;
  let prevCurrent = 0;

  for (let i = 0; i <= 50; i++) {
    if (i < 2) {
      yield i;
    } else {
      [prevCurrent, current] = [current, prevCurrent];

      current += prevCurrent;

      yield current;
    }
  }
};

const gen = fibGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
