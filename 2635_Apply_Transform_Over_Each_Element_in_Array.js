var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
};

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
); // [2,3,4]

console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  })
); // [1,3,5]

console.log(
  map([1, 2, 3], function constant() {
    return 42;
  })
); // [42,42,42]
