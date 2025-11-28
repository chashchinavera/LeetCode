"use strict";

var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
  });

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastResultIndex = result.length - 1;

    const [prevI, prevJ] = result[lastResultIndex];
    const [curI, curJ] = intervals[i];

    if (curI <= prevJ) {
      result[lastResultIndex] = [prevI, Math.max(curJ, prevJ)];
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); //[[1,6],[8,10],[15,18]]s
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); //[[1,5]]
console.log(
  merge([
    [4, 7],
    [1, 4],
  ])
); // [[1,7]]
