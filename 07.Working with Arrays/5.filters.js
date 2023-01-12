const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter will create an array with given condition
const deposit = movements.filter(mov => mov > 0);
console.log(deposit);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
