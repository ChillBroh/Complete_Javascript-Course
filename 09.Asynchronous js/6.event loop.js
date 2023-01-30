console.log('Test Start');
setTimeout(() => console.log('0 sec Timer'), 0);
Promise.resolve('Resolved Promise 1').then((res) => console.log(res));
console.log('Test End');

//when whole code runs time out will be in call back q and promise will put in micro task q.logs will put in stack
//set timer and promise will be put in other q. that's why the log methods prints first
//promise will put in micro task q and that's why it executed before the timer.
