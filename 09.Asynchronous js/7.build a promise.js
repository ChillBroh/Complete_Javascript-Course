'use strict';

const lottary = new Promise((resolve, reject) => {
  console.log('lottary Draw is hapenning...');
  setTimeout(function () {
    //this will set time. timer is move to call back section while promise in micro task
    let num = Math.trunc(Math.random() * 10);
    if (num >= 5) {
      console.log(num);
      resolve('You Won!');
    } else {
      console.log(num);
      reject('Lost Money!');
    }
  }, 2000);
});

lottary.then((res) => console.log(res)).catch((err) => console.log(err));
