'use strict';
const julia = [5, 2, 4, 1, 15, 8, 3];
const kate = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr => {
  const humanAge = arr.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(humanAge);
};
calcAverageHumanAge(julia);
