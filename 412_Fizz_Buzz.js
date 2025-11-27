"use strict";

var fizzBuzz = function (n) {
  const result = Array(n);

  for (let i = 0; i < n; i++) {
    const index = i + 1;
    if (index % 3 === 0 && index % 5 === 0) {
      result[i] = "FizzBuzz";
    } else if (index % 3 === 0) {
      result[i] = "Fizz";
    } else if (index % 5 === 0) {
      result[i] = "Buzz";
    } else {
      result[i] = `${index}`;
    }
  }

  return result;
};

console.log(fizzBuzz(3)); //["1","2","Fizz"]
console.log(fizzBuzz(5)); //["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
