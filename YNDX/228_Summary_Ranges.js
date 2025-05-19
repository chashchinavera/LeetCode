"use strict";

function a(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let startIndex = i;
    while (nums[i] + 1 === nums[i + 1]) ++i;

    result.push(
      nums[startIndex] !== nums[i]
        ? `${nums[startIndex]}->${nums[i]}`
        : `${nums[i]}`
    );
  }

  return result;
}

console.log(a([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(a([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
