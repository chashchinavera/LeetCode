"use strict";

function a(matrix) {
  const rows = Array(matrix.length);
  const cols = Array(matrix[0].length);

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 0;
        cols[j] = 0;
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (rows[i] === 0 || cols[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

console.log(
  a([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
); // [[1,0,1],[0,0,0],[1,0,1]]
console.log(
  a([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
