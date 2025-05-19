"use strict";

function a(nums, val) {
  let s = 0;

  let counter = 0;

  let last = undefined;

  while (s < nums.length) {
    if (nums[s] === val) {
      ++counter;
      if (last === undefined) {
        last = s;
      }
    } else {
      if (last !== undefined) {
        [nums[last], nums[s]] = [nums[s], nums[last]];
        ++last;
      }
    }
    s++;
  }

  return nums.length - counter;
}

console.log(a([3, 2, 2, 3], 3)); // [2,2,3,3], 2
console.log(a([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [0,1,3,0,4,2,2,2], 5
