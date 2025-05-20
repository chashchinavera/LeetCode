"use strict";

function a(str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;

  //замена
  if (str1Length === str2Length) {
    let isChanged = false;

    for (let i = 0; i < str1Length; i++) {
      if (str1[i] !== str2[i]) {
        if (isChanged) return false;

        isChanged = true;
      }
    }

    return true;
    //добавление
  } else if (str1Length + 1 === str2Length) {
    let isAdded = false;

    for (let i = 0, j = 0; i < str1Length; i++, j++) {
      if (str1[i] !== str2[j]) {
        if (isAdded) return false;

        isAdded = true;
        --j;
      }
    }

    return true;
    //удаление
  } else if (str1Length - 1 === str2Length) {
    let isDeleted = false;

    for (let i = 0, j = 0; i < str1.length; i++, j++) {
      if (str1[i] !== str2[j]) {
        if (isDeleted) return false;

        isDeleted = true;
        --j;
      }
    }

    return true;
  } else return false;
}

console.log(a("ab", "acb")); // true
console.log(a("cab", "ad")); // false
console.log(a("1203", "1213")); // true
console.log(a("cad", "ad")); // true
