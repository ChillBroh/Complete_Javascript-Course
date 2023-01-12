movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//acc is the intermediate variable that keeps sum of values
//initial value or the default value is 0
const balance = movements.reduce((acc, val, i, arr) => acc + val, 0);
console.log(balance);

//find the total of deposits
const Deposites = movements.filter(mov => mov > 0);
const totalDeposites = Deposites.reduce((acc, val) => acc + val, 0);

//find total withdrawals
const withdrawals = movements.filter(mov => mov < 0);
const totalWithdrawals = Math.abs(
  withdrawals.reduce((acc, val) => acc + val, 0)
);

console.log(`Total amounts of deposites : ${totalDeposites} 
Total amounts of withdrawals : ${totalWithdrawals}`);
