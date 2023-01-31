//when whole code runs time out will be in call back q and promise will put in micro task q.logs will put in stack
//set timer and promise will be put in other q. that's why the log methods prints first
//promise will put in micro task q and that's why it executed before the timer.

Promise.resolve('Resolved promise 2').then((res) => console.log(res));
//always promises put in the micro task q

//first promise will put in micro task q and resolve right afer promise 2 but loop wi
Promise.resolve('Resolved Promise 3').then((res) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log('Test End');
