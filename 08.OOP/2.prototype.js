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
