"use strict";

var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    if (result[target - currentValue] === undefined) {
      result[currentValue] = i;
    } else {
      return [result[target - currentValue], i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
console.log(twoSum([3, 3], 6)); //[0,1]
