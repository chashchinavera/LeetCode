"use strict";

function a(n) {
  const result = [];
  addBracket();

  return result;

  function addBracket(str = "", leftBrackets = 0, rightBrackets = 0) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    if (leftBrackets < n) {
      addBracket(str + "(", leftBrackets + 1, rightBrackets);
    }
    if (rightBrackets < leftBrackets) {
      addBracket(str + ")", leftBrackets, rightBrackets + 1);
    }
  }
}

console.log(a(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(a(1)); // ["()"]
