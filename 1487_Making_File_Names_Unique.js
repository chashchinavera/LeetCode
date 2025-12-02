"use strict";

var getFolderNames = function (names) {
  const result = [];
  const namesMap = new Map();

  for (let i = 0; i < names.length; i++) {
    const current = names[i];

    if (namesMap.has(current)) {
      let count = namesMap.get(current);
      let newName = `${current}(${count})`;

      while (namesMap.has(newName)) {
        count += 1;
        newName = `${current}(${count})`;
      }

      result.push(newName);
      namesMap.set(newName, 1);
      namesMap.set(current, count + 1);
    } else {
      result.push(current);
      namesMap.set(current, 1);
    }
  }

  return result;
};

console.log(getFolderNames(["pes", "fifa", "gta", "pes(2019)"])); //["pes","fifa","gta","pes(2019)"]
console.log(getFolderNames(["gta", "gta(1)", "gta", "avalon"])); //["gta","gta(1)","gta(2)","avalon"]
console.log(
  getFolderNames([
    "onepiece",
    "onepiece(1)",
    "onepiece(2)",
    "onepiece(3)",
    "onepiece",
  ])
); //["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]

console.log(getFolderNames(["kaido", "kaido(1)", "kaido", "kaido(1)"])); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
console.log(
  getFolderNames(["kaido", "kaido(1)", "kaido", "kaido(1)", "kaido(2)"])
); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)","kaido(1)(2)"]
console.log(getFolderNames(["wano", "wano", "wano", "wano"])); //["wano","wano(1)","wano(2)","wano(3)"]
