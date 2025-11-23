"use strict";

var longestPalindrome = function (s) {
  let result = s[0];

  for (let i = 1; i < s.length; i++) {
    let left = i - 2;
    let right = i + 1;

    if (s[i] !== s[i - 1] && s[i - 1] !== s[i + 1]) continue;

    if (s[i] === s[i - 1]) {
      checkNeighbours(left, right);
    }

    if (s[i - 1] === s[i + 1]) {
      right += 1;
      checkNeighbours(left, right);
    }
  }

  return result;

  function checkNeighbours(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    const current = s.substring(left + 1, right);

    if (result.length < current.length) {
      result = current;
    }
  }
};

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb
