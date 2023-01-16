'use strict';
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
let humanAges = [];
const calcAverageHumanAge = (i, arr) => {
  let humanAge;
  if (arr[i] <= 2) 2 * arr[i];
  else if (arr[i] > 2) 16 + arr[i] * 4;
  humanAges.push(humanAge);
};
calcAverageHumanAge(julia);
console.log(humanAges);
