"use strict";

var cancellable = function (fn, args, t) {
  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  const result = () => clearTimeout(timer);

  return result;
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result, "1"); // [{"time":20,"returned":10}]
}, 1000);

const result1 = [];

const fn1 = (x) => x ** 2;
const args1 = [2],
  t1 = 100,
  cancelTimeMs1 = 50;

const start1 = performance.now();

const log1 = (...argsArr) => {
  const diff = Math.floor(performance.now() - start1);
  result1.push({ time: diff, returned: fn1(...argsArr) });
};

const cancel1 = cancellable(log1, args1, t1);

const maxT1 = Math.max(t1, cancelTimeMs1);

setTimeout(cancel1, cancelTimeMs1);

setTimeout(() => {
  console.log(result1, "2"); // [{"time":20,"returned":10}]
}, 1000);

const result2 = [];

const fn2 = (x1, x2) => x1 * x2;
const args2 = [2, 4],
  t2 = 30,
  cancelTimeMs2 = 100;

const start2 = performance.now();

const log2 = (...argsArr) => {
  const diff = Math.floor(performance.now() - start2);
  result2.push({ time: diff, returned: fn2(...argsArr) });
};

const cancel2 = cancellable(log2, args2, t2);

const maxT2 = Math.max(t2, cancelTimeMs2);

setTimeout(cancel2, cancelTimeMs2);

setTimeout(() => {
  console.log(result2, "3"); // [{"time":20,"returned":10}]
}, 1000);
