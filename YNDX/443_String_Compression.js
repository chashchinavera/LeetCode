"use strict";

function a(chars) {
  let lastIndex = 0;

  for (let i = 0; i < chars.length; i++) {
    chars[lastIndex] = chars[i];
    let count = 1;

    while (chars[i] === chars[i + 1]) {
      ++i;
      ++count;
    }

    if (count > 9) {
      const nums = `${count}`;

      for (let num of nums) {
        chars[++lastIndex] = num;
      }
    } else if (count > 1) {
      chars[++lastIndex] = `${count}`;
    }

    ++lastIndex;
  }

  chars.length = lastIndex;

  return chars;
}

console.log(a(["a", "a", "b", "b", "c", "c", "c"])); // ["a","2","b","2","c","3"]
console.log(a(["a"])); // ["a"];
console.log(
  a(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // ["a","b","1","2"]

console.log(a(["a", "a", "a", "b", "b", "a", "a"])); // ["a","3"," b","2","a","2 "]
