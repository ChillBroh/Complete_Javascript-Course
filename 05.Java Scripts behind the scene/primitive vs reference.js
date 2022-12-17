"use strict";
//primitive types
let lastName = "Madusanka";
let oldLastName = lastName;
lastName = "chill";
console.log(lastName, oldLastName);

//Reference types ..... object points to the same address in the heap.
const me = {
  name: "ishara",
  age: 24,
};

const friend = me; //only copy the reference
friend.age = 25;

console.log("me :", me);
console.log("Friend :", friend);

//copying object
const me2 = {
  name: "ishara",
  age: 24,
  family: ["isuru", "sara"],
};

const friend2 = Object.assign({}, me2); //only create shallow copy. still referencing to the inner object
friend2.name = "chila";
friend2.family.push("AJ"); //this will add to both object. because this is not a deep clone. onlly a shallow copy

console.log(me2);
console.log(friend2);

//deep clone will learn in upcomming lectures
