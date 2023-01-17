'use strict';

class Person {
  constructor(fname, birthYear) {
    this.fname = fname;
    this.birthYear = birthYear;
  }
  //method will auto added to the prototype
  calcAge() {
    return 2023 - this.birthYear;
  }
}
//also can add methods like this
Person.prototype.greet = function () {
  console.log(`Hello ${this.fname}`);
};

//create an object
const Ishara = new Person('Ishara', 1998);
console.log(Ishara.calcAge());
Ishara.greet();
