"use strict";

function a(nums1, nums2) {
  const maxLength = Math.max(nums1.length, nums2.length);

  const result = [];

  for (let i = 0; i < maxLength; i++) {
    if (nums1[i]) result.push(nums1[i]);
    if (nums2[i]) result.push(nums2[i]);
  }

  return result;
}

console.log(a([1, 2], [3, 4, 5, 6])); // [1,3,2,4,5,6]
console.log(a([1], [])); // [1]
console.log(a([], [1])); // [1]
