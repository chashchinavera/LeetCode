"use strict";

var lengthOfLongestSubstring = function (s) {
  let maxSubstring = 0;
  const letters = new Map();

  for (let i = 0, j = 0; i < s.length && j < s.length; i++) {
    const current = s[i];
    if (letters.has(current)) {
      maxSubstring = Math.max(maxSubstring, letters.size);
      while (letters.has(s[j])) {
        if (s[j] === current) {
          j += 1;

          break;
        }

        letters.delete(s[j]);
        j += 1;
      }
    } else {
      letters.set(current, 1);
    }
  }

  maxSubstring = Math.max(maxSubstring, letters.size);

  return maxSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("aabaab!bb")); // 3
