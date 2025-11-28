"use strict";

var reverse = function (x) {
  const isMinus = x < 0 ? true : false;

  const xSubstr = isMinus ? x.toString().substr(1) : x.toString();

  let reversedS = Number(xSubstr.split("").reverse().join(""));

  if (isMinus) {
    reversedS = -reversedS;
  }

  return reversedS >= 2147483651 || reversedS <= -2147483651 ? 0 : reversedS;
};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21
