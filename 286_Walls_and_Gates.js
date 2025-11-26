"use strict";

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;

var wallsAndGates = function (rooms) {
  const height = rooms.length;
  if (height === 0) return [];

  const width = rooms[0].length;
  const queue = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (rooms[i][j] === GATE) {
        queue.push({ i, j, steps: 1 });
      }
    }
  }

  while (queue.length) {
    const { i, j, steps } = queue.shift();

    const neighbours = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];

    for (let k = 0; k < 4; k++) {
      const [curI, curJ] = neighbours[k];
      if (
        curI < 0 ||
        curI >= height ||
        curJ < 0 ||
        curJ >= width ||
        rooms[curI][curJ] !== EMPTY
      ) {
        continue;
      }
      rooms[curI][curJ] = steps;
      queue.push({ i: curI, j: curJ, steps: steps + 1 });
    }
  }

  return rooms;
};

console.log(
  wallsAndGates([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ])
); //[[3,-1,0,1], [2,2,1,-1], [1,-1,2,-1] , [0,-1, 3,4]]
console.log(wallsAndGates([[-1]])); //[[-1]]
