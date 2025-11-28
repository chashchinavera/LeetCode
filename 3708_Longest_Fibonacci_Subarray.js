"use strict";

var longestSubarray = function (nums) {
  let maxLength = 2;

  let currentLength = 2;
  for (let i = 2; i < nums.length; i++) {
    const current = nums[i];
    const prevSum = nums[i - 1] + nums[i - 2];

    if (current === prevSum) {
      if (currentLength < 3) {
        currentLength = 3;
      } else {
        currentLength += 1;
      }
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  maxLength = Math.max(maxLength, currentLength);

  return maxLength;
};

console.log(longestSubarray([1, 1, 1, 1, 2, 3, 5, 1])); // 5
console.log(longestSubarray([5, 2, 7, 9, 16])); // 5
console.log(longestSubarray([1000000000, 1000000000, 1000000000])); // 2
