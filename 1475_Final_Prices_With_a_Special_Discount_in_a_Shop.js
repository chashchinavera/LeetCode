"use strict";

function a(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    let discount = 0;

    while (j < prices.length) {
      if (prices[i] >= prices[j]) {
        discount = j;
        break;
      }
      ++j;
    }

    answer.push(discount === 0 ? prices[i] : prices[i] - prices[discount]);
  }

  return answer;
}

console.log(a([8, 4, 6, 2, 3])); // [4,2,4,2,3]
console.log(a([1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(a([10, 1, 1, 6])); // [9,0,1,6]
