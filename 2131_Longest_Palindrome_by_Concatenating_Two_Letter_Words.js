"use strict";

function a(words) {
  const map = new Map();

  for (let letters of words) {
    let value = map.get(letters) ?? 0;
    map.set(letters, ++value);
  }

  let center = 0;
  let answer = 0;

  for (let [letters, value] of map) {
    if (letters[0] !== letters[1]) {
      const changed = letters[1] + letters[0];

      const changedValue = map.get(changed);

      if (changedValue === undefined) {
        continue;
      }

      answer += Math.min(changedValue, value) * 4;

      map.delete(changed);
      continue;
    }

    if (value % 2 === 0) {
      answer += value * 2;
      continue;
    }

    answer += Math.floor(value / 2) * 4;
    center += value % 2;
    continue;
  }

  answer += center > 0 ? 2 : 0;

  return answer;
}

console.log(a(["lc", "cl", "gg"])); // 6
console.log(a(["ab", "ty", "yt", "lc", "cl", "ab"])); // 8
console.log(a(["cc", "ll", "xx"])); // 2
console.log(
  a([
    "dd",
    "aa",
    "bb",
    "dd",
    "aa",
    "dd",
    "bb",
    "dd",
    "aa",
    "cc",
    "bb",
    "cc",
    "dd",
    "cc",
  ])
); // 22
console.log(
  a([
    "qo",
    "fo",
    "fq",
    "qf",
    "fo",
    "ff",
    "qq",
    "qf",
    "of",
    "of",
    "oo",
    "of",
    "of",
    "qf",
    "qf",
    "of",
  ])
); // 14
console.log(
  a([
    "qw",
    "rr",
    "ll",
    "vv",
    "iw",
    "wq",
    "cc",
    "wi",
    "jj",
    "iw",
    "pp",
    "iw",
    "mm",
    "ss",
    "bb",
    "oo",
    "wi",
    "dd",
    "wq",
    "ff",
    "qi",
    "qw",
    "qi",
    "qi",
    "zz",
    "wq",
    "iw",
    "wi",
    "qq",
    "qw",
    "wi",
    "hh",
    "qi",
    "pp",
    "vv",
    "wi",
    "wq",
    "wi",
    "wi",
    "wi",
    "iw",
    "qi",
    "bb",
    "qw",
    "qi",
    "rr",
  ])
); // 54
