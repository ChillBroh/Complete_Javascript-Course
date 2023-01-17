'use strict';
//some check is there any values availble for given condions
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//includes only check one value(only check equality)
console.log(movements.includes(-400));

//some check values relating to condition
console.log(movements.some(mov => mov > 0));
console.log(movements.some(mov => mov > 5000));
