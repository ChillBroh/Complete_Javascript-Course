'use strict';
//find method use to find the things like what is the first withdraw
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const firstWithdraw = movements.find(mov => mov < 0);
console.log(`First withdrawed amount is ${Math.abs(firstWithdraw)}`);

const firstDeposit = movements.find(mov => mov > 0);
console.log(`First deposited amount is ${firstDeposit}`);
