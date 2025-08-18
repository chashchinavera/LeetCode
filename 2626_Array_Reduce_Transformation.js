"use strict";

var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }

  return init;
};

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
); // 10
console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100
  )
); // 130
console.log(
  reduce(
    [],
    function sum(accum, curr) {
      return 0;
    },
    25
  )
); // 25
