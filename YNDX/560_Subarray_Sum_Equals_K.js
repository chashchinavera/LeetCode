"use strict";

function a(nums, k) {
  const prefixMap = { 0: 1 };
  let sum = 0;
  let answer = 0;

  nums.forEach((el) => {
    sum += el;
    const key = sum - k;

    if (prefixMap[key]) {
      answer += prefixMap[key];
    }

    prefixMap[sum] ? ++prefixMap[sum] : (prefixMap[sum] = 1);
  });

  return answer;
}

console.log(a([1, 1, 1], 2)); // 2
console.log(a([1, 2, 3], 3)); // 2
console.log(a([1, 2, 1, 2, 1], 3)); // 4
