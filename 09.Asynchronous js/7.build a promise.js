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

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

//this will avoid call back hell
wait(1) //this will execute cause lottary take 2seconds and this will take only one sec
  .then(() => {
    console.log('1 sec');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec');
    return wait(1);
  });
