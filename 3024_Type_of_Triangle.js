"use strict";

function a(nums) {
  const [a, b, c] = nums;

  if (a + b > c && b + c > a && a + c > b) {
    const ab = a === b;
    const ac = a === c;
    const bc = b === c;
    if (ab && bc && ac) return "equilateral";
    else if (ab || bc || ac) return "isosceles";
    else return "scalene";
  } else {
    return "none";
  }
}

console.log(a([3, 3, 3])); // "equilateral"
console.log(a([3, 4, 5])); // "scalene"
