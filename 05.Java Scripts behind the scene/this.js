"use strict";
console.log(this); //show windows object if not used use strict
let name = "chill";
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

const Ishara = {
  name: "ishara",
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(`hello ${this.name}`); //ot work undefined. cause arrow don't have this keyword
  },
};

Ishara.calcAge();

//copy function from object to object
const Madusanka = {
  year: 2000,
};

Madusanka.calcAge = Ishara.calcAge; //method borrwing

console.log(Madusanka);
Madusanka.calcAge();
Ishara.calcAge();
Ishara.greet(); /*get undefined cause it users window object. all objects are in global scope.they don't have a scope themselves. 
if we create var name definietly this.name use that var in arrow function*/
console.log(name);
console.log(Ishara.name);
