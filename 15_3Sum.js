"use strict";

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) {
        k -= 1;
      } else if (sum < 0) {
        j += 1;
      } else if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j += 1;

        while (nums[j] === nums[j - 1] && j < k) {
          j += 1;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([-100, -70, -60, 110, 120, 130, 160])); // [[-100,-60,160],[-70,-60,130]]
console.log(threeSum([1, -1, -1, 0])); // [[-1,0,1]]
