"use strict";

function a(nums) {
  for (let i = 0, firstZero = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
      ++firstZero;
    }
  }

  return nums;
}

console.log(a([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(a([0])); // [0]
