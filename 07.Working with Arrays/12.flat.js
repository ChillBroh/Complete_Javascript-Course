"use strict";

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//will create new array without inner arrays if the given array has one level inner arrays
console.log(arr.flat());

const arrDeep = [[[1, [2]], 3], [4, [5], 6], 7, 8];
//will only remove the first level of inner array and create new array
console.log(arrDeep.flat());

//will remove 2 levels of inner arrays
console.log(arrDeep.flat(2));
