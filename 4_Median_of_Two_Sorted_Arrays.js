"use strict";

var findMedianSortedArrays = function (nums1, nums2) {
  const lengthSum = nums1.length + nums2.length;
  const result = Array(lengthSum);
  let nums1Index = 0;
  let nums2Index = 0;

  for (let i = 0; i < lengthSum; i++) {
    if (nums1Index < nums1.length && nums2Index < nums2.length) {
      if (nums1[nums1Index] < nums2[nums2Index]) {
        result[i] = nums1[nums1Index];
        nums1Index += 1;
      } else {
        result[i] = nums2[nums2Index];
        nums2Index += 1;
      }
    } else if (nums1Index < nums1.length) {
      result[i] = nums1[nums1Index];
      nums1Index += 1;
    } else if (nums2Index < nums2.length) {
      result[i] = nums2[nums2Index];
      nums2Index += 1;
    }
  }

  const lengthOdd = result[Math.floor(result.length / 2)];

  const middle = Math.floor(result.length / 2);
  const lengthEven = (result[middle - 1] + result[middle]) / 2;

  return result.length % 2 !== 0 ? lengthOdd : lengthEven;
};

console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.5
console.log(findMedianSortedArrays([1, 3], [2])); //2
console.log(findMedianSortedArrays([0, 0], [0, 0])); //0
