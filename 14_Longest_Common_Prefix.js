"use strict";

var longestCommonPrefix = function (strs) {
  let result = strs[0];
  let resultLength = result.length;

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    while (result !== str.substring(0, resultLength)) {
      resultLength -= 1;
      if (resultLength === 0) {
        return "";
      }

      result = result.substring(0, resultLength);
    }
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); //'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); //''
console.log(longestCommonPrefix(["аб", "а"])); //'a'
console.log(longestCommonPrefix(["абаб", "аба", ""])); //''
