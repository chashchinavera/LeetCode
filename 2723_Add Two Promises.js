"use strict";

var addTwoPromises = async function (promise1, promise2) {
  const first = await promise1;
  const second = await promise2;
  return new Promise((resolve) => {
    resolve(first + second);
  });
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

const promise3 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
const promise4 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
addTwoPromises(promise1, promise2).then(console.log); // 7
addTwoPromises(promise3, promise4).then(console.log); // -2
