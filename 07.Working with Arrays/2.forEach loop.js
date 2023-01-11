'use strict';
///WIh ARRAYS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//using for of
for (const [i, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${i + 1} : Your deposited amount = ${value}`);
  } else
    console.log(
      `Movement ${i + 1} : Your withdrawed amount = ${Math.abs(value)}`
    );
}

console.log('---- For Each ----');
//using for each
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : Your deposited amount = ${mov}`);
  } else console.log(`Movement ${i + 1} : Your withdrawed amount = ${Math.abs(mov)}`);
});

///WITH MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//with SET
const currencies2 = new Set(['USD', 'GBP', 'USD', 'EUR', 'GBP']);
console.log(currencies2);

currencies2.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
