'use strict';

const lottary = new Promise((resolve, reject) => {
  let num = Math.trunc(Math.random() * 10);
  if (num >= 5) {
    console.log(num);
    resolve('You Won!');
  } else {
    console.log(num);
    reject('Lost Money!');
  }
});

lottary.then((res) => console.log(res)).catch((err) => console.log(err));
