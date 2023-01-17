'use strict';

const Person = function (fname, birthyYear) {
  this.fname = fname;
  this.birthyYear = birthyYear;

  //don't create metods in a constructor it will do in prototypes
};

const Ishara = new Person('Ishara', 1998);
console.log(Ishara);

const Shavini = new Person('Shavini', 1998);
const Sandunika = new Person('Sandunika', 1998);
console.log(Shavini, Sandunika); //create new objects each

console.log(Person.prototype);

//create a prototype for a constructor
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyYear);
};

Ishara.calcAge();
Shavini.calcAge();
Sandunika.calcAge();

console.log(Person.prototype.isPrototypeOf(Ishara));
console.log(Person.prototype.isPrototypeOf(Person));
//prototype only for the linked objects

console.log(Ishara.__proto__); //check prototype of person person.prototype
console.log(Ishara.__proto__ === Person.prototype);
console.log(Ishara.__proto__.__proto__); //check prototype of prototype of person - object.prototype
console.log(Ishara.__proto__.__proto__.__proto__); //this is null. cause object. prototype is in the top of chain

const arr = [1, 2, 2, 3, 4, 5];
//will give all the prototypes related to Array.prototype class
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//add new property for Array prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
