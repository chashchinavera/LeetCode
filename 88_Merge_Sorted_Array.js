"use strict";

function a(nums1, m, nums2, n) {
  let f = m - 1;
  let a = nums1.length - 1;
  let s = n - 1;

  while (s >= 0) {
    if (nums1[f] >= nums2[s]) {
      nums1[a] = nums1[f];
      f--;
    } else {
      nums1[a] = nums2[s];
      s--;
    }
    a--;
  }

  return nums1;
}

console.log(a([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(a([0], 1, [1], 1));
