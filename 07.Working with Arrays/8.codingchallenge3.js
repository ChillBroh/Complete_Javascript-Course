'use strict';
const julia = [5, 2, 4, 1, 15, 8, 3];
const kate = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr => {
  const humanAge = arr
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAge;
};
console.log(calcAverageHumanAge(julia));
