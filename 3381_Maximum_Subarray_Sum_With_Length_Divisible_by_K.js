"use strict";

var maxSubarraySum = function (nums, k) {
  const prefix = Array(k).fill(0);
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
    prefix[i] = 0;
  }

  prefix[k - 1] = currentSum;

  let maxSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i];

    const prevIndex = i % k;

    prefix[prevIndex] = Math.max(prefix[prevIndex] + currentSum, currentSum);

    maxSum = Math.max(prefix[prevIndex], maxSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2], 1)); //3
console.log(maxSubarraySum([-1, -2, -3, -4, -5], 4)); //-10
console.log(maxSubarraySum([-5, 1, 2, -3, 4], 2)); //4
console.log(maxSubarraySum([-9, 18, 18], 2)); //36

console.log(maxSubarraySum([9, -11, 15], 2)); // 4
