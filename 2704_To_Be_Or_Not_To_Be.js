var expect = function (val) {
  return {
    toBe: (secondValue) => {
      if (val === secondValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (secondValue) => {
      if (val !== secondValue) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
