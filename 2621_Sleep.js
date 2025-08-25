"use strict";

async function sleep(millis) {
  const timeout = await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
