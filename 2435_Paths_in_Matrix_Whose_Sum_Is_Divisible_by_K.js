"use strict";

var numberOfPaths = function (grid, k) {
  const height = grid.length;
  const width = grid[0].length;
  const MOD = 1000000007;

  const dp = [];

  for (let i = 0; i <= height; i++) {
    dp[i] = [];
    for (let j = 0; j <= width; j++) {
      dp[i][j] = Array(k).fill(0);

      if (i === 1 && j === 1) {
        dp[i][j][grid[i - 1][j - 1] % k] = 1;
        continue;
      }

      if (i >= 1 && j >= 1) {
        const current = grid[i - 1][j - 1] % k;
        for (let r = 0; r < k; r++) {
          const prev = (r - current + k) % k;

          dp[i][j][r] = (dp[i - 1][j][prev] + dp[i][j - 1][prev]) % MOD;
        }
      }
    }
  }
  return dp[height][width][0];
};

console.log(
  numberOfPaths(
    [
      [5, 2, 4],
      [3, 0, 5],
      [0, 7, 2],
    ],
    3
  )
); //2
console.log(numberOfPaths([[0, 0]], 5)); //1
console.log(
  numberOfPaths(
    [
      [7, 3, 4, 9],
      [2, 3, 6, 2],
      [2, 3, 7, 0],
    ],
    1
  )
); //10
