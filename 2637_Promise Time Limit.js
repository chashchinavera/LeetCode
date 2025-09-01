"use strict";

var timeLimit = function (fn, t) {
  return async function (...args) {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    const request = new Promise((resolve) => {
      resolve(fn(...args));
      clearTimeout(timeout);
    });

    return Promise.race([timeout, request]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
const a = limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
setTimeout(() => {
  console.log(a);
}, 1000);

const limited0 = timeLimit((n) => {
  new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 50);
const a0 = limited0(5).catch(console.log); // "Time Limit Exceeded" at t=100ms
setTimeout(() => {
  console.log(a0);
}, 1000);
