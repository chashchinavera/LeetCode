"use strict";

function a(nums) {
  if (!nums.includes(0)) {
    return nums.length - 1;
  }

  let max = 0;
  let first = 0;
  let second = 0;

  for (let num of nums) {
    if (num !== 0) {
      ++second;
    } else {
      max = Math.max(max, first + second);
      first = second;
      second = 0;
    }
  }

  max = Math.max(max, first + second);

  return max;
}

console.log(a([1, 1, 0, 1])); //3
console.log(a([0, 1, 1, 1, 0, 1, 1, 0, 1])); //5
console.log(a([1, 1, 1])); //2
