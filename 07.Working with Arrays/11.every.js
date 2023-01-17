'use strict';
//similar to some but only return true all elements in the array are according to the given condiion
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const allDeposits = movements.every(mov => mov > 0);
console.log(`Is all transections are deposits? ${allDeposits}`);
