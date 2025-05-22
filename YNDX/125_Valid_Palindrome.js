"use strict";

function a(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }

  return true;
}

console.log(a("A man, a plan, a canal: Panama")); // true
console.log(a("race a car")); // false
console.log(a(" ")); // true
