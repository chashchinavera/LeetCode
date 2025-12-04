"use strict";

var maxArea = function (height) {
  let maxVolume = -Infinity;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentLeft = height[left];

    const currentRight = height[right];
    const currentVolume = Math.min(currentLeft, currentRight) * (right - left);
    maxVolume = Math.max(maxVolume, currentVolume);
      if (height[left] <= height[right]) {
        left += 1;
      } else {
        right -= 1;
      }
  }

  return maxVolume;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); //1
console.log(maxArea([1, 2, 4, 3])); //4
