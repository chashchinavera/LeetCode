"use strict";

function a(nums) {
  const set = new Set();
  let count = 0;
  let last = 0;

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      last ??= i;
    } else {
      set.add(nums[i]);
      ++count;
      nums[last++] = nums[i];
    }
  }

  nums.length = count;

  return [nums, nums.length];
}

console.log(a([1, 1, 2])); //2
console.log(a([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5
