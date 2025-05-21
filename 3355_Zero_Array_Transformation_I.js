"use strict";

function a(nums, queries) {
  const diff = Array(nums.length + 1).fill(0);

  for (let [l, r] of queries) {
    diff[l]--;

    diff[r + 1]++;
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += diff[i];

    if (nums[i] + sum > 0) return false;
  }
  return true;
}

console.log(a([1, 0, 1], [[0, 2]])); // true
console.log(
  a(
    [4, 3, 2, 1],
    [
      [1, 3],
      [0, 2],
    ]
  )
); // false
