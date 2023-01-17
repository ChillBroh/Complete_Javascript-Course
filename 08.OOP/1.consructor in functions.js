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

const chill = 'chill';

console.log(Ishara instanceof Person);
console.log(chill instanceof Person);
