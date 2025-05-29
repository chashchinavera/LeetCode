"use strict";

function a(strs) {
  let obj = {};

  for (let el of strs) {
    const sortedEl = el.split("").sort().join("");

    if (obj[sortedEl]) {
      obj[sortedEl].push(el);
    } else obj[sortedEl] = [el];
  }

  return Object.values(obj);
}

console.log(a(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(a([""])); // [""]
console.log(a(["a"])); // ["a"]
