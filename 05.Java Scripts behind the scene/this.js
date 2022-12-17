"use strict";
console.log(this); //show windows object if not used use strict

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //in strict mode this will show as undefined. not like global function
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //arrow function doesn't have its own this.so this will work as global this and show window obj
};

calcAge(1991);
