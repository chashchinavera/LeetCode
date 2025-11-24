"use strict";

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const letters = new Map();

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (letters.has(current)) {
      const count = letters.get(current);
      letters.set(current, count + 1);
    } else {
      letters.set(current, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const current = t[i];
    if (letters.has(current)) {
      const count = letters.get(current);
      if (count === 1) {
        letters.delete(current);
      } else {
        letters.set(current, count - 1);
      }
    } else {
      return false;
    }
  }

  return letters.size === 0 ? true : false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
