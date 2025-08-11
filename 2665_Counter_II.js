var createCounter = function (init) {
  let value = init;
  return {
    increment: () => {
      return ++value;
    },
    decrement: () => {
      return --value;
    },
    reset: () => {
      value = init;
      return value;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
