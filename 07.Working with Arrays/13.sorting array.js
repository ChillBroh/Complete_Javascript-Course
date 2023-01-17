'use strict';

const names = ['Ishara', 'sara', 'sehan', 'kasun'];
console.log(names.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//this will fist convert numbers to string and then sort the array. result is incorrect
console.log(movements.sort());

const right = movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(right);

const right2 = movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(right2);

//method 2
console.log(movements.sort((a, b) => a - b));
