"use strict";

var trap = function (height) {
  const length = height.length;
  let left = 0;
  let right = length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];

  let result = 0;

  while (left < right) {
    if (maxLeft <= maxRight) {
      left += 1;
      const current = Math.min(maxLeft, maxRight) - height[left];
      result += current > 0 ? current : 0;
      maxLeft = Math.max(maxLeft, height[left]);
    } else {
      right -= 1;
      const current = Math.min(maxLeft, maxRight) - height[right];
      result += current > 0 ? current : 0;
      maxRight = Math.max(maxRight, height[right]);
    }
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
console.log(trap([4, 2, 0, 3, 2, 5])); //9
