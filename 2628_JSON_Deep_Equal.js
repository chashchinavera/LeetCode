"use strict";

function isDeepEqual(data1, data2) {
  if (data1.length !== data2.length || typeof data1 !== typeof data2) {
    return false;
  }

  if (Array.isArray(data1) && Array.isArray(data2)) {
    for (let i = 0; i < data1.length; i++) {
      if (!isDeepEqual(data1[i], data2[i])) {
        return false;
      }
    }
  } else if (
    typeof data1 === "object" &&
    typeof data2 === "object" &&
    data1 !== null &&
    data2 !== null
  ) {
    const obj1 = Object.entries(data1);
    const obj2 = Object.entries(data2);

    if (obj1.length !== obj2.length) {
      return false;
    }

    for (let i = 0; i < obj1.length; i++) {
      const [key1, value1] = obj1[i];

      if (!data2.hasOwnProperty(key1) || !isDeepEqual(value1, data2[key1])) {
        return false;
      }
    }
  } else {
    if (data1 !== data2) {
      return false;
    }
  }

  return true;
}

console.log(isDeepEqual(1, 1)); // true
console.log(isDeepEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(isDeepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(isDeepEqual([1, 2], [1, 3])); // false
console.log(isDeepEqual({ a: 1 }, { a: 1, b: 2 })); // false
